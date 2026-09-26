import child_process from "node:child_process"

const output = JSON.parse(
	child_process.execFileSync(".github/Simple Mod Framework", [
		"validate-mod",
		"--lenient",
		"."
	])
)

if (output.result === "pass") {
	console.log("Validation passed")
} else {
	console.log("Validation failed")
	console.log(output)
	process.exit(1)
}
