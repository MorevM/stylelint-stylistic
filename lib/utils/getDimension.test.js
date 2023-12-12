import { it } from "node:test"
import { equal } from "node:assert/strict"

import valueParser from "postcss-value-parser"

import getDimension from "./getDimension.js"

it(`getDimension`, () => {
	equal(getDimension().number, null)
	equal(getDimension().unit, null)
	equal(getDimension({}).number, null)
	equal(getDimension({}).unit, null)

	// testing Dimension.unit
	equal(getDimension(valueParser(`1.1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`1.1000s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`1.1S`).nodes[0]).unit, `S`)
	equal(getDimension(valueParser(`+1.1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+1.1000s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-1.1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-1.1000s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`1.1e10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+1.1e10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-1.1e10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`1.1e+10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`1.1e-10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+1.1e+10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+1.1e-10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-1.1e-10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-1.1e+10s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`1pX`).nodes[0]).unit, `pX`)
	equal(getDimension(valueParser(`1PX`).nodes[0]).unit, `PX`)
	equal(getDimension(valueParser(`+1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`-1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`1e1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`+1e1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`-1e1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`1e-1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`1e+1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`+1e+1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`+1e-1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`-1e-1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`-1e+1px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`.1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+.1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-.1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+.1000s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-.1000s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`.1e1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+.1e1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-.1e1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`.1e-1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`.1e+1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+.1e+1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`+.1e-1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-.1e-1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`-.1e+1s`).nodes[0]).unit, `s`)
	equal(getDimension(valueParser(`100%`).nodes[0]).unit, `%`)
	equal(getDimension(valueParser(`100`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`0\\0`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`10px\\9`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`6e-2px`).nodes[0]).unit, `px`)
	equal(getDimension(valueParser(`.0`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`+.0`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`-.0`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`.0e1`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`+.0e1`).nodes[0]).unit, ``)
	equal(getDimension(valueParser(`-.0e1`).nodes[0]).unit, ``)

	// testing Dimension.number
	equal(getDimension(valueParser(`1.1s`).nodes[0]).number, `1.1`)
	equal(getDimension(valueParser(`1.1000s`).nodes[0]).number, `1.1000`)
	equal(getDimension(valueParser(`1.1S`).nodes[0]).number, `1.1`)
	equal(getDimension(valueParser(`+1.1s`).nodes[0]).number, `+1.1`)
	equal(getDimension(valueParser(`+1.1000s`).nodes[0]).number, `+1.1000`)
	equal(getDimension(valueParser(`-1.1s`).nodes[0]).number, `-1.1`)
	equal(getDimension(valueParser(`-1.1000s`).nodes[0]).number, `-1.1000`)
	equal(getDimension(valueParser(`1.1e10s`).nodes[0]).number, `1.1e10`)
	equal(getDimension(valueParser(`+1.1e10s`).nodes[0]).number, `+1.1e10`)
	equal(getDimension(valueParser(`-1.1e10s`).nodes[0]).number, `-1.1e10`)
	equal(getDimension(valueParser(`1.1e+10s`).nodes[0]).number, `1.1e+10`)
	equal(getDimension(valueParser(`1.1e-10s`).nodes[0]).number, `1.1e-10`)
	equal(getDimension(valueParser(`+1.1e+10s`).nodes[0]).number, `+1.1e+10`)
	equal(getDimension(valueParser(`+1.1e-10s`).nodes[0]).number, `+1.1e-10`)
	equal(getDimension(valueParser(`-1.1e-10s`).nodes[0]).number, `-1.1e-10`)
	equal(getDimension(valueParser(`-1.1e+10s`).nodes[0]).number, `-1.1e+10`)
	equal(getDimension(valueParser(`1px`).nodes[0]).number, `1`)
	equal(getDimension(valueParser(`1pX`).nodes[0]).number, `1`)
	equal(getDimension(valueParser(`1PX`).nodes[0]).number, `1`)
	equal(getDimension(valueParser(`+1px`).nodes[0]).number, `+1`)
	equal(getDimension(valueParser(`-1px`).nodes[0]).number, `-1`)
	equal(getDimension(valueParser(`1e1px`).nodes[0]).number, `1e1`)
	equal(getDimension(valueParser(`+1e1px`).nodes[0]).number, `+1e1`)
	equal(getDimension(valueParser(`-1e1px`).nodes[0]).number, `-1e1`)
	equal(getDimension(valueParser(`1e-1px`).nodes[0]).number, `1e-1`)
	equal(getDimension(valueParser(`1e+1px`).nodes[0]).number, `1e+1`)
	equal(getDimension(valueParser(`+1e+1px`).nodes[0]).number, `+1e+1`)
	equal(getDimension(valueParser(`+1e-1px`).nodes[0]).number, `+1e-1`)
	equal(getDimension(valueParser(`-1e-1px`).nodes[0]).number, `-1e-1`)
	equal(getDimension(valueParser(`-1e+1px`).nodes[0]).number, `-1e+1`)
	equal(getDimension(valueParser(`.1s`).nodes[0]).number, `.1`)
	equal(getDimension(valueParser(`+.1s`).nodes[0]).number, `+.1`)
	equal(getDimension(valueParser(`-.1s`).nodes[0]).number, `-.1`)
	equal(getDimension(valueParser(`+.1000s`).nodes[0]).number, `+.1000`)
	equal(getDimension(valueParser(`-.1000s`).nodes[0]).number, `-.1000`)
	equal(getDimension(valueParser(`.1e1s`).nodes[0]).number, `.1e1`)
	equal(getDimension(valueParser(`+.1e1s`).nodes[0]).number, `+.1e1`)
	equal(getDimension(valueParser(`-.1e1s`).nodes[0]).number, `-.1e1`)
	equal(getDimension(valueParser(`.1e-1s`).nodes[0]).number, `.1e-1`)
	equal(getDimension(valueParser(`.1e+1s`).nodes[0]).number, `.1e+1`)
	equal(getDimension(valueParser(`+.1e+1s`).nodes[0]).number, `+.1e+1`)
	equal(getDimension(valueParser(`+.1e-1s`).nodes[0]).number, `+.1e-1`)
	equal(getDimension(valueParser(`-.1e-1s`).nodes[0]).number, `-.1e-1`)
	equal(getDimension(valueParser(`-.1e+1s`).nodes[0]).number, `-.1e+1`)
	equal(getDimension(valueParser(`100%`).nodes[0]).number, `100`)
	equal(getDimension(valueParser(`100`).nodes[0]).number, `100`)
	equal(getDimension(valueParser(`0\\0`).nodes[0]).number, `0`)
	equal(getDimension(valueParser(`10px\\9`).nodes[0]).number, `10`)
	equal(getDimension(valueParser(`6e-2px`).nodes[0]).number, `6e-2`)
	equal(getDimension(valueParser(`.0`).nodes[0]).number, `.0`)
	equal(getDimension(valueParser(`+.0`).nodes[0]).number, `+.0`)
	equal(getDimension(valueParser(`-.0`).nodes[0]).number, `-.0`)
	equal(getDimension(valueParser(`.0e1`).nodes[0]).number, `.0e1`)
	equal(getDimension(valueParser(`+.0e1`).nodes[0]).number, `+.0e1`)
	equal(getDimension(valueParser(`-.0e1`).nodes[0]).number, `-.0e1`)

	// testing invalid inputs
	equal(getDimension(valueParser(`#fff`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`#000`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`#zzzzzz`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`#F`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`#PX`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`"100"`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`"100px"`).nodes[0]).unit, null)
	equal(getDimension(valueParser(` `).nodes[0]).unit, null)
	equal(getDimension(valueParser(`/`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`+`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`word`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`px`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`url()`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`url()px`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`$variable`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`\${$variable}`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`\${$variable}px`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`\${$variable}px`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`@variable`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`e1`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`wordPX`).nodes[0]).unit, null)
	equal(getDimension(valueParser(`..0`).nodes[0]).unit, null)

	equal(getDimension(valueParser(`#fff`).nodes[0]).number, null)
	equal(getDimension(valueParser(`#000`).nodes[0]).number, null)
	equal(getDimension(valueParser(`#zzzzzz`).nodes[0]).number, null)
	equal(getDimension(valueParser(`#F`).nodes[0]).number, null)
	equal(getDimension(valueParser(`#PX`).nodes[0]).number, null)
	equal(getDimension(valueParser(`"100"`).nodes[0]).number, null)
	equal(getDimension(valueParser(`"100px"`).nodes[0]).number, null)
	equal(getDimension(valueParser(` `).nodes[0]).number, null)
	equal(getDimension(valueParser(`/`).nodes[0]).number, null)
	equal(getDimension(valueParser(`+`).nodes[0]).number, null)
	equal(getDimension(valueParser(`word`).nodes[0]).number, null)
	equal(getDimension(valueParser(`px`).nodes[0]).number, null)
	equal(getDimension(valueParser(`url()`).nodes[0]).number, null)
	equal(getDimension(valueParser(`url()px`).nodes[0]).number, null)
	equal(getDimension(valueParser(`$variable`).nodes[0]).number, null)
	equal(getDimension(valueParser(`\${$variable}`).nodes[0]).number, null)
	equal(getDimension(valueParser(`\${$variable}px`).nodes[0]).number, null)
	equal(getDimension(valueParser(`\${$variable}px`).nodes[0]).number, null)
	equal(getDimension(valueParser(`@variable`).nodes[0]).number, null)
	equal(getDimension(valueParser(`e1`).nodes[0]).number, null)
	equal(getDimension(valueParser(`wordPX`).nodes[0]).number, null)
	equal(getDimension(valueParser(`..0`).nodes[0]).number, null)
})