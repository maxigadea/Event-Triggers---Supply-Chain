
const ItemManager = artifacts.require('./ItemManager.sol');

contract('ItemManager', accounts => {
    it("...Should be able to add an Item", async function () {
        const itemManagerInstance = await ItemManager.deployed();
        const itemName = "test1";
        const itemPrice = 500;

        let result = await itemManagerInstance.createItem(itemName, itemPrice, {from: accounts[0]});
        assert.equal(result.logs[0].args._itemIndex, 0, "it's not the first item");

        let item = await itemManagerInstance.items(0);
        assert.equal(item._identifier, itemName, "The identifier was different");
    })
});