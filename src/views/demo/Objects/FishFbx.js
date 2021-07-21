import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

let model;
function loadModel() {
  try {
    const fbxLoader = new FBXLoader();
    fbxLoader.setPath("/public/assets/fish/");
    return new Promise((resolve, reject) => {
      fbxLoader.load(
        "bullfish_03_final_v02_.fbx",
        (object) => {
          object.scale.set(0.5, 0.5, 0.5);
          model = object;
          resolve(object);
        },
        null,
        reject
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export default class FishFbx {
  constructor() {
    console.log(FBXLoader);
    this.instance = null;
  }
  async loadData(flag) {
    if (flag) {
      this.instance = await loadModel();
    } else {
      this.instance = model.clone();
    }
  }
}
