class CatalogGroup {
	constructor(name, composits) {
		this.name = name
		this.composits = composits
	}
	get total() {
		return this.composits.reduce((total, nextItem) => total + nextItem.total, 0)
	}

	print() {
		console.log(`\n${this.name.toUpperCase()}`)
		this.composits.forEach(item => item.print())
	}
}

module.exports = CatalogGroup
