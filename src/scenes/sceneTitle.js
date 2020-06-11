import {
    BaseScene
} from "./baseScene";
import {ColorBurst} from "../common/effects/colorBurst";
import {
    FlatButton
} from "../common/ui/flatButton";
import {
    TextStyles
} from "../common/ui/textStyles";
import {
    ToggleButton
} from "../common/ui/toggleButton";
import {
    Align
} from "../common/util/align";

//
//
//
export class SceneTitle extends BaseScene {
    constructor() {
        super('SceneTitle');
    }
    preload() {
        super.preload();
    }
    create() {
        super.create();
        //
        //
        // uncomment to turn on music
        // this.mm.setBackgroundMusic("backgroundMusic");
        //
        // this.setBackground('sky');

        this.setBackground( 'background' );

        //
        //
        this.makeAlignGrid(11, 11);
       this.aGrid.showNumbers();
        //
        //
        //
      //  this.placeImage('title', 27, .8);
        this.placeText("RonaGun",27,"TITLE_TEXT");
        //
        //
        //
      //  let buttonStyle = this.textStyles.getStyle(TextStyles.BUTTON_STYLE);
        let btnNext = new FlatButton({
            scene: this,
            textStyle: 'BUTTON_STYLE',
            key: "button",
            text: "START GAME",
            callback: this.startGame.bind(this)
        });
        this.aGrid.placeAtIndex(104, btnNext);
        //
        //
        //
        //
        //
        //
        this.makeUi();
        this.placeText(".:👾 0.200-09 👾:.",49,"frost");

        this.makeColorStars();
    }

    makeColorStars() {
        this.colorStars = new ColorBurst({
            scene: this
        });

        Align.center(this.colorStars, this);
    }

    makeUi() {
        super.makeSoundPanel();
        super.makeGear();
    }
    startGame() {
        this.scene.start("SceneMain");
    }
    update() {}
}