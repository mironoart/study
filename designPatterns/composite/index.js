var CatalogItem = require('./CatalogItem')
var CatalogGroup = require('./CatalogGroup')

var boots = new CatalogItem('Leather Boots', 79.99)
var sneakers = new CatalogItem('Kicks', 39.99)
var flipFlops = new CatalogItem('California work boots', 19.99)

var group_shoes = new CatalogGroup('Shoes and Such', [boots, sneakers, flipFlops])
var group_food = new CatalogGroup('Food for while you try on clothes', [
	new CatalogItem('MilkShake', 5.99),
	new CatalogItem('French Fries', 3, 99)
])

var keychain = new CatalogItem('Key Chain', 0.99)

var catalog = new CatalogGroup('Clothes and Food', [keychain, group_food, group_shoes])

console.log(`$${catalog.total}`)
catalog.print()
/* 
console.log('boots total: ', `$${boots.total}`)
console.log('boots total: ', `$${group_shoes.total}`)

boots.print()
sneakers.print()

group_shoes.print()
 */
