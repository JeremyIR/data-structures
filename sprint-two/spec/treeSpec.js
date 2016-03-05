describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(13);
  });

  it('should have methods named "addChild", "contains" and "removeFromParent",and a properties named "value", "parent, and "children"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
    expect(tree.hasOwnProperty('children')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should add a child which points to its parent', function() {
    tree.addChild(2);
    expect(tree.children[0].parent.value).to.equal(13);
  }); 

  it('should separate a parent tree from a child tree', function() {
    tree.add.child(2);
    tree.add.child(3);
    tree.children[0].addChild(7);
    var subTree = tree.children[0].removeFromParent();
    expect(subTree.value).to.equal(2);
    expect(subTree.children[0]).to.equal(7);
    expect(tree.children[0].value).to.equal(3);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
