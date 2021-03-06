// standard library
importPackage(Packages.graphics.scenery);
importPackage(Packages.graphics.scenery.backends);
importPackage(Packages.graphics.scenery.backends.opengl);
importPackage(Packages.graphics.scenery.backends.vulkan);
importPackage(Packages.graphics.scenery.controls);
importPackage(Packages.graphics.scenery.net);
importPackage(Packages.graphics.scenery.fonts);
importPackage(Packages.graphics.scenery.compute);
importPackage(Packages.graphics.scenery.numerics);
importPackage(Packages.graphics.scenery.utils);
importPackage(Packages.graphics.scenery.volumes);
importPackage(Packages.org.joml);

// for threading
importClass(Packages.java.lang.Thread);

var ObjectLocator = function(match) {
    var objectArray = object.getIndex().toArray();

    for(i = 0; i < objectArray.length; i++) {
        var name = objectArray[i].toString().split('\n')[0];
        if(name.indexOf(match) != -1) {
            return objectArray[i];
        }
    }

    print("ObjectLocator: Could not find " + match);
    return null;
};

Array.prototype.first = function() {
    if(this === void 0 || this === null) {
        throw new TypeError();
    }

    if(this.length == 0) {
        return null;
    } else {
        return this[0];
    }
};

Array.prototype.last = function() {
    if(this === void 0 || this === null) {
        throw new TypeError();
    }

    if(this.length == 0) {
        return null;
    } else {
        return this[this.length-1];
    }
};

// define standard variables
var scene = ObjectLocator("Scene");
var renderer = ObjectLocator("Renderer");
var stats = ObjectLocator("Statistics");
var hub = ObjectLocator("Hub");
var settings = ObjectLocator("Settings");
var base = hub.getApplication();

// and say hello :-)
print("\n\n");
print("this is scenery.");
print("Standard library imported.\n");
print("Try scene.addChild(a = new Box(new GLVector(4.0, 4.0, 4.0)))");
print("------------------------------------------------------------");
print("");
print("");
