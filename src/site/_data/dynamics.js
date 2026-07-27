// fs-file-tree@2.x ships as an ES module ("type": "module") with only a
// default export. A top-level `require("fs-file-tree")` under Node's
// require(esm) support returns the module namespace object (not the
// function itself), so calling it directly throws
// "fsFileTree is not a function". Load it via dynamic import and unwrap
// the default export instead; this file stays CommonJS (module.exports)
// since the functions here are already async.
let fsFileTreePromise;
const getFsFileTree = () => {
  if (!fsFileTreePromise) {
    fsFileTreePromise = import("fs-file-tree").then((mod) => mod.default);
  }
  return fsFileTreePromise;
};

const BASE_PATH = "src/site/_includes/components/user";
const STYLE_PATH = "src/site/styles/user";
const NAMESPACES = ["index", "notes", "common"];
const SLOTS = ["head", "header", "beforeContent", "afterContent", "footer"];
const FILE_TREE_NAMESPACE = "filetree";
const FILE_TREE_SLOTS = ["beforeTitle", "afterTitle"];
const SIDEBAR_NAMESPACE = "sidebar";
const SIDEBAR_SLOTS = ["top", "bottom"];
const STYLES_NAMESPACE = "styles";

const generateComponentPaths = async (namespace, slots) => {
  const data = {};
  for (let index = 0; index < slots.length; index++) {
    const slot = slots[index];
    try {
      const fsFileTree = await getFsFileTree();
      const tree = await fsFileTree(`${BASE_PATH}/${namespace}/${slot}`);
      let comps = Object.keys(tree)
        .filter((p) => p.indexOf(".njk") != -1)
        .map((p) => `components/user/${namespace}/${slot}/${p}`);
      comps.sort();
      data[slot] = comps;
    } catch {
      data[slot] = [];
    }
  }
  return data;
};

const generateStylesPaths = async () => {
  try {
    const fsFileTree = await getFsFileTree();
    const tree = await fsFileTree(`${STYLE_PATH}`);
    let comps = Object.keys(tree).map((p) =>
      `/styles/user/${p}`.replace(".scss", ".css")
    );
    comps.sort();
    return comps;
  } catch {
    return [];
  }
};

module.exports = async () => {
  const data = {};
  for (let index = 0; index < NAMESPACES.length; index++) {
    const ns = NAMESPACES[index];
    data[ns] = await generateComponentPaths(ns, SLOTS);
  }
  data[FILE_TREE_NAMESPACE] = await generateComponentPaths(
    FILE_TREE_NAMESPACE,
    FILE_TREE_SLOTS
  );
  data[SIDEBAR_NAMESPACE] = await generateComponentPaths(
    SIDEBAR_NAMESPACE,
    SIDEBAR_SLOTS
  );
  data[STYLES_NAMESPACE] = await generateStylesPaths();
  return data;
};
