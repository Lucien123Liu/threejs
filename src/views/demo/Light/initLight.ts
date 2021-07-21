import { AmbientLight, DirectionalLight, Scene } from "three"
export default function initLight(scene: Scene) {
    scene.add(new AmbientLight())
    scene.add(new DirectionalLight())
}