---
{"dg-publish":true,"permalink":"/02-projects/experiments/readout-induced-decay-of-records/","tags":["example"]}
---

# Readout-induced decay of records

## Purpose
Test whether a persistent distinction qualifies as a record only when it can be accessed repeatedly without significantly accelerating decay.

## Links to claims
- [[02-Projects/Claims and Hypotheses/Records require readable persistence\|Records require readable persistence]]
- [[02-Projects/Claims and Hypotheses/Persistent distinction equals suppressed transition rate\|Persistent distinction equals suppressed transition rate]] (optional)

## System
A bistable memory element (two metastable basins) subject to noise, with an adjustable readout coupling that extracts state information.

## Setup
- Memory variable: x(t) (effective state coordinate)
- Basins: A and B (partition defined by x < 0 vs x > 0, or by attractor membership)
- Noise model: thermal or stochastic forcing with known intensity D
- Readout channel: a probe that couples to x(t) with strength g and is applied at rate f (reads per unit time)

## Distinction definition
- Effective state variables: x(t)
- Partition rule: A if x(t) < 0, B if x(t) > 0 (or basin membership)
- Persistence baseline: measure lifetime τ0 with g = 0

## Readout implementation (conceptual)
During readout events, the probe interacts with the memory element. That interaction should have two effects:
1. It reveals state (increases measurement signal-to-noise).
2. It perturbs the dynamics (adds back-action noise or reduces barrier height).

## Measurement / metric
Primary:
- τ(g, f): mean dwell time in a basin (or mean first-passage time across the boundary)
- k(g, f) = 1 / τ(g, f): transition rate

Secondary:
- Readout fidelity: P(correct state | probe output)
- Back-action proxy: additional effective diffusion ΔD(g) or effective barrier reduction ΔU(g)

## Experimental protocol
1. Calibrate baseline: measure τ0 at g = 0 across noise levels D.
2. Turn on readout with fixed f; sweep g; measure τ(g, f) and fidelity.
3. Fix g; sweep f; measure τ(g, f).
4. Repeat across at least two barrier heights (or constraint strengths).

## Expected outcomes
If claim holds:
- τ(g, f) decreases as g increases and as f increases (readout accelerates decay).
- There exists a regime where fidelity is high yet τ is not strongly reduced (a “usable record regime”).

If claim fails:
- τ is insensitive to g and f, or decay is dominated entirely by baseline noise regardless of probing.

## Notes
This tests an operational distinction between:
- a persistent distinction (stable state),
- and a record (stable state that remains stable under repeated access).
