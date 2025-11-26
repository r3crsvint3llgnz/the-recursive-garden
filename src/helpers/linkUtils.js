const wikiLinkRegex = /\[\[(.*?\|.*?)\]\]/g;
const internalLinkRegex = /href="\/(.*?)"/g;

function caselessCompare(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

function extractLinks(content) {
  return [
    ...(content.match(wikiLinkRegex) || []).map(
      (link) =>
        link
          .slice(2, -2)
          .split("|")[0]
          .replace(/.(md|markdown)\s?$/i, "")
          .replace("\\", "")
          .trim()
          .split("#")[0]
    ),
    ...(content.match(internalLinkRegex) || []).map(
      (link) =>
        link
          .slice(6, -1)
          .split("|")[0]
          .replace(/.(md|markdown)\s?$/i, "")
          .replace("\\", "")
          .trim()
          .split("#")[0]
    ),
  ];
}

async function getGraph(data) {
  let nodes = {};
  let links = [];
  let stemURLs = {};
  let homeAlias = "/";

  const notes = (data.collections && data.collections.note) || [];

  // Build node map using async template.read()
  await Promise.all(
    notes.map(async (v, idx) => {
      if (!v.template || typeof v.template.read !== "function") return;

      // Eleventy 3+ async-friendly way to get content + data
      const { content } = await v.template.read();

      let fpath = v.filePathStem.replace("/notes/", "");
      let parts = fpath.split("/");
      let group = "none";
      if (parts.length >= 3) {
        group = parts[parts.length - 2];
      }

      nodes[v.url] = {
        id: idx,
        title: v.data.title || v.fileSlug,
        url: v.url,
        group,
        home:
          v.data["dg-home"] ||
          (Array.isArray(v.data.tags) &&
            v.data.tags.indexOf("gardenEntry") > -1) ||
          false,
        outBound: extractLinks(content),
        neighbors: new Set(),
        backLinks: new Set(),
        noteIcon: v.data.noteIcon || process.env.NOTE_ICON_DEFAULT,
        hide: v.data.hideInGraph || false,
      };

      stemURLs[fpath] = v.url;

      if (
        v.data["dg-home"] ||
        (Array.isArray(v.data.tags) && v.data.tags.indexOf("gardenEntry") > -1)
      ) {
        homeAlias = v.url;
      }
    })
  );

  // Resolve outbound links to neighbors/backlinks
  Object.values(nodes).forEach((node) => {
    let outBound = new Set();

    // Guard against nodes that don't have outBound defined
    (node.outBound || []).forEach((olink) => {
      let link = (stemURLs[olink] || olink).split("#")[0];
      outBound.add(link);
    });

    node.outBound = Array.from(outBound);

    node.outBound.forEach((link) => {
      let n = nodes[link];
      if (n) {
        n.neighbors.add(node.url);
        n.backLinks.add(node.url);
        node.neighbors.add(n.url);
        links.push({ source: node.id, target: n.id });
      }
    });
  });

  // Normalize Sets to arrays and add size
  Object.keys(nodes).forEach((k) => {
    nodes[k].neighbors = Array.from(nodes[k].neighbors);
    nodes[k].backLinks = Array.from(nodes[k].backLinks);
    nodes[k].size = nodes[k].neighbors.length;
  });

  return {
    homeAlias,
    nodes,
    links,
  };
}

module.exports = {
  getGraph,
  // …whatever else you already export here…
};

exports.wikiLinkRegex = wikiLinkRegex;
exports.internalLinkRegex = internalLinkRegex;
exports.extractLinks = extractLinks;
exports.getGraph = getGraph;
