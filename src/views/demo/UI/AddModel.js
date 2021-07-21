import FishFbx from "../Objects/FishFbx";

let scene;
export function addModel(web3D) {
  scene = web3D.scene;
  addFishFbx();
}

async function addFishFbx() {
  const fish = new FishFbx();
  await fish.loadData(true)
  scene.add(fish.instance);
}
