// The abstract factory interface declares a set of methods that
// return different abstract products. These products are called
// a family and are related by a high-level theme or concept.
// Products of one family are usually able to collaborate among
// themselves. A family of products may have several variants,
// but the products of one variant are incompatible with the
// products of another variant.
interface GUIFactory {
  createButton: () => Button;
  createCheckBox: () => CheckBox;
}

// Concrete factories produce a family of products that belong
// to a single variant. The factory guarantees that the
// resulting products are compatible. Signatures of the concrete
// factory's methods return an abstract product, while inside
// the method a concrete product is instantiated.
class WinFactory implements GUIFactory {
  public createButton(){
    return new WinButton();
  }
  public createCheckBox(){
    return new WinCheckBox();
  }
}

// Each concrete factory has a corresponding product variant.
class MacFactory implements GUIFactory{
  public createButton(){
    return new MacButton();
  }
  public createCheckBox(){
    return new MacCheckBox();
  }
}

// Each distinct product of a product family should have a base
// interface. All variants of the product must implement this
// interface.

interface Button {
  paint: () => void;
}

// Concrete products are created by corresponding concrete
// factories.
class WinButton implements Button {
  public paint(){
    console.log('Paint Win Button')
  } 
}

class MacButton implements Button {
  public paint(){
    console.log('Paint Mac Button')
  }
}


// Here's the base interface of another product. All products
// can interact with each other, but proper interaction is
// possible only between products of the same concrete variant.
interface CheckBox {
  paint: () => void;
}

class WinCheckBox implements CheckBox {
  public paint(){
    console.log('Paint Win Button')
  }
}

class MacCheckBox implements CheckBox {
  public paint(){
    console.log('Paint mac Button')
  }
}


// The client code works with factories and products only
// through abstract types: GUIFactory, Button and Checkbox. This
// lets you pass any factory or product subclass to the client
// code without breaking it.
const Application = (factory: GUIFactory): void => {
  factory.createButton();
  factory.createCheckBox();
}

