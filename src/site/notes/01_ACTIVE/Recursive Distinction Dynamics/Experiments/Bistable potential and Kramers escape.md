---
{"dg-publish":true,"kind":"example","status":"draft","topics":["Recursive Distinction Dynamics"],"tags":["example"],"created":"2025-12-29","updated":"2025-12-29","permalink":"/01-active/recursive-distinction-dynamics/experiments/bistable-potential-and-kramers-escape/","dgPassFrontmatter":true,"dg-note-properties":{"kind":"example","status":"draft","topics":["Recursive Distinction Dynamics"],"tags":["example"],"created":"2025-12-29","updated":"2025-12-29"}}
---

# Bistable potential and Kramers escape

## Purpose
Test whether persistent distinctions correspond to suppressed transition rates.

## Links to claims
- [[01_ACTIVE/Recursive Distinction Dynamics/Claims and Hypotheses/Persistent distinction equals suppressed transition rate\|Persistent distinction equals suppressed transition rate]]

## System
Particle in a double-well potential with thermal noise.

## Setup
- Control parameters: barrier height, noise strength
- Noise model: Gaussian white noise
- Initial conditions: ensemble localized in one well

## Distinction definition
- Effective variable: position
- Partition: left well vs right well

## Measurement / metric
- Mean first-passage time
- Escape rate distribution
- Lifetime scaling with barrier height

## Expected outcomes
- If claim holds: exponential dependence of lifetime on barrier height.
- If claim fails: weak or no correlation.
