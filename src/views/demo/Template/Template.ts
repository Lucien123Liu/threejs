import {
    Color,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three'
import initLight from "../Light/initLight"
export default class Template {
    scene: Scene = new Scene
    clearColor: Color = new Color(0xffffff)
    render: WebGLRenderer = new WebGLRenderer
    camera: PerspectiveCamera = new PerspectiveCamera
    domElement: HTMLElement
    constructor(domElement: HTMLElement) {
        this.domElement = domElement
    }
    initCamera() {
        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
        this.camera.position.set(100, 100, 100)
        this.camera.lookAt(this.scene.position)
        this.scene.add(this.camera)
    }

    initRender() {
        this.render.render(this.scene, this.camera)
        this.render.setClearColor(this.clearColor)
        this.render.setSize(window.innerWidth, window.innerHeight)
        this.domElement.appendChild(this.render.domElement)
    }

    init() {
        this.initCamera()
        initLight(this.scene)
        this.initRender()
    }
}