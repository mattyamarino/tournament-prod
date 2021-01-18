(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\779649\Desktop\practice\tournament-app\src\main.ts */"zUnb");


/***/ }),

/***/ "4uN5":
/*!********************************************************************!*\
  !*** ./src/app/logo-scoreboard/score-card/score-card.component.ts ***!
  \********************************************************************/
/*! exports provided: ScoreCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCardComponent", function() { return ScoreCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_contestant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/contestant */ "vedz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ScoreCardComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r0.place, "");
} }
function ScoreCardComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r1.getEjc(), "");
} }
function ScoreCardComponent_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreCardComponent_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreCardComponent_span_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreCardComponent_span_11_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreCardComponent_span_11_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreCardComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreCardComponent_span_11_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreCardComponent_span_11_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScoreCardComponent_span_11_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScoreCardComponent_span_11_span_4_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScoreCardComponent_span_11_span_5_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", "1st" === ctx_r2.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", "2nd" === ctx_r2.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", "3rd" === ctx_r2.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", "4th" === ctx_r2.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.contestant.isBestPresentation);
} }
class ScoreCardComponent {
    constructor() {
        this.contestant = new src_app_models_contestant__WEBPACK_IMPORTED_MODULE_1__["Contestant"];
        this.isFinalRound = false;
    }
    ngOnInit() {
    }
    getEjc() {
        return this.contestant.ejc ? 'Juice!' : '';
    }
}
ScoreCardComponent.ɵfac = function ScoreCardComponent_Factory(t) { return new (t || ScoreCardComponent)(); };
ScoreCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreCardComponent, selectors: [["app-score-card"]], inputs: { contestant: "contestant", place: "place", isAllContestantsTied: "isAllContestantsTied", isFinalRound: "isFinalRound" }, decls: 12, vars: 6, consts: [[1, "score-card-container"], ["mat-card-avatar", "", 3, "ngClass"], [1, "score-card-text-ml2"], [1, "card-title"], [4, "ngIf"], ["class", "font-red", 4, "ngIf"], [1, "font-red"], ["src", "../../../assets/trophy1use.svg", 1, "final-results-icon"], ["src", "../../../assets/silver-medal -use.svg", 1, "final-results-icon"], ["src", "../../../assets/bronze-medal - use.svg", 1, "final-results-icon"], ["src", "../../../assets/last-place.svg", 1, "final-results-icon"], ["src", "../../../assets/ribbon.png", 1, "final-results-icon"]], template: function ScoreCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScoreCardComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ScoreCardComponent_span_10_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScoreCardComponent_span_11_Template, 6, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contestant.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contestant.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAllContestantsTied);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contestant.points, "pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFinalRound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFinalRound);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".tyler-image[_ngcontent-%COMP%] {\n  background-image: url('tyler-avatar.jpg');\n  background-size: cover;\n}\n\n.shelbie-image[_ngcontent-%COMP%] {\n  background-image: url('shel-avatar.jpg');\n  background-size: cover;\n}\n\n.vic-image[_ngcontent-%COMP%] {\n  background-image: url('vic-avatar.jpg');\n  background-size: cover;\n}\n\n.matt-image[_ngcontent-%COMP%] {\n  background-image: url('matt-avatar.jpg');\n  background-size: cover;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: \"Bungee\", cursive;\n  font-size: 12px;\n}\n\n.score-card-container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.score-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.score-card-text-ml2[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY29yZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsdUNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUoiLCJmaWxlIjoic2NvcmUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnR5bGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3R5bGVyLWF2YXRhci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuc2hlbGJpZS1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zaGVsLWF2YXRhci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAudmljLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3ZpYy1hdmF0YXIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdHQtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvbWF0dC1hdmF0YXIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlLWNhcmQtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNjb3JlLWNhcmQtc3VidGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuc2NvcmUtY2FyZC10ZXh0LW1sMntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score-card',
                templateUrl: './score-card.component.html',
                styleUrls: ['./score-card.component.scss']
            }]
    }], function () { return []; }, { contestant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], place: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAllContestantsTied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFinalRound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _content_modal_content_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-modal/content-modal.component */ "MA+w");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class NavBarComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(_content_modal_content_modal_component__WEBPACK_IMPORTED_MODULE_1__["ContentModalComponent"]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 13, vars: 0, consts: [[1, "nav-bar-container"], [1, "nav-bar-text"], ["src", "../../assets/analytics-24px.png", 1, "large-icon"], ["src", "../../assets/instagram.png", 1, "large-icon"], ["src", "../../assets/spotify.png", 1, "large-icon"], [1, "nav-bar-text", 3, "click"], ["src", "../../assets/article-24px.png", 1, "large-icon"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Analytics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 Instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_span_click_10_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-bar-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  background-color: #05054d;\n  padding: 8px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  color: white;\n  margin-bottom: 15px;\n}\n\n.nav-bar-text[_ngcontent-%COMP%] {\n  padding: 8px;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhci1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCA1LCA3Nyk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubmF2LWJhci10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDojexVGPB_jlfCWtVZKmGq-m6ymUoDk2I",
        authDomain: "texas-tournament.firebaseapp.com",
        databaseURL: "https://texas-tournament-default-rtdb.firebaseio.com",
        projectId: "texas-tournament",
        storageBucket: "texas-tournament.appspot.com",
        messagingSenderId: "1095264044611",
        appId: "1:1095264044611:web:5f46047d4ad9168a8eb6f6",
        measurementId: "G-ZZ731HVF15",
        storage: "gs://texas-tournament.appspot.com"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EJf0":
/*!****************************************************************************************!*\
  !*** ./src/app/tournament-parent/event-card-by-round/event-card-by-round.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EventCardByRoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardByRoundComponent", function() { return EventCardByRoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ "TCge");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _best_presentation_award_best_presentation_award_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./best-presentation-award/best-presentation-award.component */ "k6UC");
/* harmony import */ var _event_result_event_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-result/event-result.component */ "cgmD");







function EventCardByRoundComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-best-presentation-award", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bestPresentationWinners", ctx_r1.bestPresentationWinners);
} }
function EventCardByRoundComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-result", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tournamentEvent", event_r3);
} }
class EventCardByRoundComponent {
    constructor() {
        this.unfilteredEvents = [];
        this.finalRound = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__["FINAL_ROUND"];
    }
    ngOnInit() {
        this.filterEvents();
    }
    filterEvents() {
        this.tournamentEvents = this.unfilteredEvents[1];
    }
}
EventCardByRoundComponent.ɵfac = function EventCardByRoundComponent_Factory(t) { return new (t || EventCardByRoundComponent)(); };
EventCardByRoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventCardByRoundComponent, selectors: [["app-event-card-by-round"]], inputs: { roundNumber: "roundNumber", unfilteredEvents: "unfilteredEvents", bestPresentationWinners: "bestPresentationWinners" }, decls: 10, vars: 4, consts: [["hideToggle", "", "expanded", "false", 1, "expansion-panel-margin", 3, "focusout"], ["tournamentRound", ""], [1, "bungee-title"], [4, "ngIf"], [1, "host"], [4, "ngFor", "ngForOf"], [3, "bestPresentationWinners"], [3, "tournamentEvent"]], template: function EventCardByRoundComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function EventCardByRoundComponent_Template_mat_expansion_panel_focusout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventCardByRoundComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventCardByRoundComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Round ", ctx.roundNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundNumber === ctx.finalRound && ctx.bestPresentationWinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Host : \u00A0", ctx.tournamentEvents[0].host, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tournamentEvents);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _best_presentation_award_best_presentation_award_component__WEBPACK_IMPORTED_MODULE_4__["BestPresentationAwardComponent"], _event_result_event_result_component__WEBPACK_IMPORTED_MODULE_5__["EventResultComponent"]], styles: [".expansion-panel-margin[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #05054d;\n}\n\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n\n.host[_ngcontent-%COMP%] {\n  font-family: \"Bungee\", cursive;\n  text-align: center;\n  margin-top: 5px;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.eventContainer[_ngcontent-%COMP%] {\n  width: 288px;\n  height: 80px;\n  margin: auto;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxldmVudC1jYXJkLWJ5LXJvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoiZXZlbnQtY2FyZC1ieS1yb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbnNpb24tcGFuZWwtbWFyZ2lue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCA1LCA3Nyk7XHJcbiAgfVxyXG5cclxuLmZvbnQtbW9ubyB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uaG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmV2ZW50Q29udGFpbmVye1xyXG4gIHdpZHRoOiAyODhweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventCardByRoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-card-by-round',
                templateUrl: './event-card-by-round.component.html',
                styleUrls: ['./event-card-by-round.component.scss']
            }]
    }], function () { return []; }, { roundNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unfilteredEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bestPresentationWinners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EyH0":
/*!****************************************************!*\
  !*** ./src/app/rules/hosting/hosting.component.ts ***!
  \****************************************************/
/*! exports provided: HostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingComponent", function() { return HostingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HostingComponent {
    constructor() { }
    ngOnInit() {
    }
}
HostingComponent.ɵfac = function HostingComponent_Factory(t) { return new (t || HostingComponent)(); };
HostingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostingComponent, selectors: [["app-hosting"]], decls: 13, vars: 0, consts: [[1, "bungee-rules-header"], [1, "font-mono"]], template: function HostingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hosting\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " As a champion you will be in charge of one competition evening. You will select the events that transpire, but your decision do not end there. The TIOT boasts a rich history of pageantry and splendor, so you must keep the tradition alive and bring your bravado to further your chances at victory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " After the final round, the Board of Governors shall determine who best represented the TIOT ideals. This can be achieved through a clever theme, a delectable hors d'oeuvre, a succulent cocktail, or fun flair that outshines the rest. The most creative champion will receive an extra three luxury points for their efforts. HUZZAH! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Every competition evening will conclude with the passing of the Torch of Friendship. It is at this time that the next host will be announced, and any necessary information about the upcoming events will be delivered. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " *bonus points will be divided evenly in the event of a tie\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".expansion-panel-margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #05054d;\n}\n\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob3N0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Imhvc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5zaW9uLXBhbmVsLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgNSwgNzcpO1xyXG4gIH1cclxuXHJcbi5mb250LW1vbm8ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hosting',
                templateUrl: './hosting.component.html',
                styleUrls: ['./hosting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IzAj":
/*!************************************************************!*\
  !*** ./src/app/rules/tiebreakers/tiebreakers.component.ts ***!
  \************************************************************/
/*! exports provided: TiebreakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiebreakersComponent", function() { return TiebreakersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TiebreakersComponent {
    constructor() { }
    ngOnInit() {
    }
}
TiebreakersComponent.ɵfac = function TiebreakersComponent_Factory(t) { return new (t || TiebreakersComponent)(); };
TiebreakersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TiebreakersComponent, selectors: [["app-tiebreakers"]], decls: 4, vars: 0, consts: [[1, "bungee-rules-header"], [1, "font-mono"]], template: function TiebreakersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tiebreakers\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tie scores shall be broken by which Champion has the most first place finishes (keeping in mind that single event rounds are worth double). If they are still tied, then whoever has the most second place finishes, followed by most third positions will be used. If, after four rounds this is still not enough to break the tie for first or last positon, then the remaining champions not involved in the deadlock shall host a Tiebreaker event (with only the tied contestants competing), to determine the supreme champion (or ultimate loser) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".expansion-panel-margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #05054d;\n}\n\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aWVicmVha2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJ0aWVicmVha2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbnNpb24tcGFuZWwtbWFyZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCA1LCA3Nyk7XHJcbiAgfVxyXG5cclxuLmZvbnQtbW9ubyB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiebreakersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tiebreakers',
                templateUrl: './tiebreakers.component.html',
                styleUrls: ['./tiebreakers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "K6su":
/*!********************************************************************!*\
  !*** ./src/app/event-admin-parent/event-admin-parent.component.ts ***!
  \********************************************************************/
/*! exports provided: EventAdminParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAdminParentComponent", function() { return EventAdminParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class EventAdminParentComponent {
    constructor(firestore) {
        this.firestore = firestore;
    }
    ngOnInit() {
    }
    testDownload() {
        const data = {
            eventName: 'Hearts',
            eventDescription: 'playing some cards',
            host: 'Matt',
            ejc: [],
            round: 1,
            first: 'Shelbie',
            second: 'Tyler',
            third: 'Matt',
            fourth: 'Victoria',
            doubleHeader: true
        };
        return new Promise((resolve, reject) => {
            this.firestore
                .collection("tournamentEvents")
                .add(data)
                .then(res => { }, err => reject(err));
        });
    }
    updloadBlankEntry() {
        const data = {
            eventName: '',
            eventDescription: '',
            host: '',
            ejc: [],
            round: 0,
            first: '',
            second: '',
            third: '',
            fourth: '',
            doubleHeader: false
        };
        return new Promise((resolve, reject) => {
            this.firestore
                // .collection("tournamentEvents")
                .collection("z-test-tournamentEvents")
                .add(data)
                .then(res => { }, err => reject(err));
        });
    }
}
EventAdminParentComponent.ɵfac = function EventAdminParentComponent_Factory(t) { return new (t || EventAdminParentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
EventAdminParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventAdminParentComponent, selectors: [["app-event-admin-parent"]], decls: 2, vars: 0, template: function EventAdminParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event-admin-parent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1hZG1pbi1wYXJlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventAdminParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-admin-parent',
                templateUrl: './event-admin-parent.component.html',
                styleUrls: ['./event-admin-parent.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "MA+w":
/*!******************************************************************!*\
  !*** ./src/app/nav-bar/content-modal/content-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: ContentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModalComponent", function() { return ContentModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _rules_content_rules_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules-content/rules-content.component */ "q/Oc");




class ContentModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentModalComponent.ɵfac = function ContentModalComponent_Factory(t) { return new (t || ContentModalComponent)(); };
ContentModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentModalComponent, selectors: [["app-content-modal"]], decls: 2, vars: 0, consts: [[1, "mat-typography"]], template: function ContentModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rules-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _rules_content_rules_content_component__WEBPACK_IMPORTED_MODULE_2__["RulesContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-modal',
                templateUrl: './content-modal.component.html',
                styleUrls: ['./content-modal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tournament_parent_tournament_parent_tournament_parent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tournament-parent/tournament-parent/tournament-parent.component */ "TxGy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'tournament-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "tournament-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tournament-parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_tournament_parent_tournament_parent_tournament_parent_component__WEBPACK_IMPORTED_MODULE_1__["TournamentParentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TCge":
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/*! exports provided: FINAL_ROUND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINAL_ROUND", function() { return FINAL_ROUND; });
const FINAL_ROUND = 4;


/***/ }),

/***/ "TxGy":
/*!************************************************************************************!*\
  !*** ./src/app/tournament-parent/tournament-parent/tournament-parent.component.ts ***!
  \************************************************************************************/
/*! exports provided: TournamentParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentParentComponent", function() { return TournamentParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ "TCge");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _logo_scoreboard_logo_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logo-scoreboard/logo-scoreboard.component */ "t6xv");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _event_card_by_round_event_card_by_round_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-card-by-round/event-card-by-round.component */ "EJf0");










function TournamentParentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TournamentParentComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-card-by-round", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const events_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("roundNumber", events_r3[0])("bestPresentationWinners", ctx_r2.bestPresentationWinners)("unfilteredEvents", events_r3);
} }
function TournamentParentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-logo-scoreboard", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-accordion", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TournamentParentComponent_div_1_div_9_Template, 2, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFinalRound", ctx_r1.isFinalRound)("placeOrder", ctx_r1.placeOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.eventIterator);
} }
class TournamentParentComponent {
    constructor(firestore) {
        this.firestore = firestore;
        this.roundMap = new Map;
        this.contestantMap = new Map;
        this.tieBreakerMap = new Map;
        this.eventsByRoundMap = new Map;
        this.events = [];
        this.placeOrder = [];
        this.bestPresentationWinners = '';
        this.isFinalRound = false;
        this.finalRound = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__["FINAL_ROUND"];
        this.eventsCompletedInFinalRound = 0;
    }
    ngOnInit() {
        this.getTournamentEvents();
    }
    initializeContestants() {
        const tyler = { name: 'Tyler', avatar: 'tyler-image', points: 0, ejc: true, isTied: false };
        const shelbie = { name: 'Shelbie', avatar: 'shelbie-image', points: 0, ejc: true, isTied: false };
        const victoria = { name: 'Victoria', avatar: 'vic-image', points: 0, ejc: true, isTied: false };
        const matt = { name: 'Matt', avatar: 'matt-image', points: 0, ejc: true, isTied: false };
        this.contestantMap.set('Tyler', tyler);
        this.contestantMap.set('Shelbie', shelbie);
        this.contestantMap.set('Victoria', victoria);
        this.contestantMap.set('Matt', matt);
    }
    resetValues() {
        this.contestantMap = new Map;
        this.initializeContestants();
        this.roundMap = new Map;
        this.tieBreakerMap = new Map;
        this.eventsByRoundMap = new Map;
        this.eventIterator = undefined;
        this.events = [];
        this.placeOrder = [];
        this.bestPresentationWinners = '';
        this.eventsCompletedInFinalRound = 0;
    }
    getTournamentEvents() {
        this.loading = true;
        this.firestore.collection("tournamentEvents").valueChanges().subscribe(res => {
            // this.firestore.collection("z-test-tournamentEvents").valueChanges().subscribe(res => {
            this.resetValues();
            this.events = res;
            this.calculateScores();
            this.setPlaceOrder();
            this.setSortedEvents();
            this.loading = false;
        });
    }
    calculateScores() {
        this.events.forEach(tournamentEvent => {
            this.sortEventByRound(tournamentEvent);
            if (this.isCompletedEvent(tournamentEvent)) {
                this.calculateEventPoints(tournamentEvent);
                this.setTiebreakerValues(tournamentEvent);
                if (tournamentEvent.ejc) {
                    tournamentEvent.ejc.forEach(use => {
                        this.calculateEJC(use, tournamentEvent);
                    });
                }
            }
            else if (tournamentEvent.bestPresentation && tournamentEvent.bestPresentation.length > 0) {
                this.calculateBestPresentation(tournamentEvent);
            }
            else if (tournamentEvent.isOvertime) {
                this.calculateOvertimeEventPoints(tournamentEvent);
            }
        });
    }
    sortEventByRound(tournamentEvent) {
        this.setIfFinalRoundComplete(tournamentEvent);
        if (tournamentEvent.round !== 0 && this.eventsByRoundMap.get(tournamentEvent.round)) {
            this.eventsByRoundMap.get(tournamentEvent.round).push(tournamentEvent);
        }
        else if (tournamentEvent.round !== 0) {
            this.eventsByRoundMap.set(tournamentEvent.round, [tournamentEvent]);
        }
    }
    setIfFinalRoundComplete(tournamentEvent) {
        if (this.isCompletedEvent(tournamentEvent) && tournamentEvent.round === this.finalRound) {
            this.eventsCompletedInFinalRound++;
            if (!tournamentEvent.doubleHeader || this.eventsCompletedInFinalRound >= 2) {
                this.isFinalRound = true;
            }
        }
    }
    isCompletedEvent(tournamentEvent) {
        return tournamentEvent.third ? true : false;
    }
    calculateEJC(use, tournamentEvent) {
        let contestantToUpdate = this.contestantMap.get(use);
        contestantToUpdate.ejc = false;
        this.applyEJCPoints(use, tournamentEvent, contestantToUpdate);
    }
    applyEJCPoints(use, tournamentEvent, contestant) {
        if (use === tournamentEvent.first) {
            tournamentEvent.firstPoints += 3;
            contestant.points += 3;
        }
        else if (use === tournamentEvent.second) {
            tournamentEvent.secondPoints -= 2;
            contestant.points -= 2;
        }
        else if (use === tournamentEvent.third) {
            tournamentEvent.thirdPoints += 1;
            contestant.points += 1;
        }
    }
    setTiebreakerValues(tournamentEvent) {
        this.setIndividualTiebreakerValue(tournamentEvent.first, 'first', tournamentEvent.doubleHeader);
        this.setIndividualTiebreakerValue(tournamentEvent.second, 'second', tournamentEvent.doubleHeader);
        this.setIndividualTiebreakerValue(tournamentEvent.third, 'third', tournamentEvent.doubleHeader);
        this.setIndividualTiebreakerValue(tournamentEvent.fourth, 'fourth', tournamentEvent.doubleHeader);
    }
    setIndividualTiebreakerValue(contestantName, place, isDoubleHeader) {
        let finishes = 0;
        const weightedFinish = isDoubleHeader ? 1 : 2;
        if (this.tieBreakerMap.get(`${contestantName} - ${place}`)) {
            finishes += this.tieBreakerMap.get(`${contestantName} - ${place}`) + weightedFinish;
        }
        else {
            finishes = weightedFinish;
        }
        this.tieBreakerMap.set(`${contestantName} - ${place}`, finishes);
    }
    calculateEventPoints(tournamentEvent) {
        const firstPoints = tournamentEvent.doubleHeader ? 4 : 8;
        const secondPoints = tournamentEvent.doubleHeader ? 3 : 6;
        const thirdPoints = tournamentEvent.doubleHeader ? 2 : 4;
        const fourthPoints = tournamentEvent.doubleHeader ? 1 : 2;
        const firstPlace = this.contestantMap.get(tournamentEvent.first);
        if (tournamentEvent.host !== firstPlace.name) {
            firstPlace.points += firstPoints;
            tournamentEvent.firstPoints = firstPoints;
        }
        else {
            firstPlace.points += secondPoints;
            tournamentEvent.firstPoints = secondPoints;
        }
        const secondPlace = this.contestantMap.get(tournamentEvent.second);
        secondPlace.points += secondPoints;
        tournamentEvent.secondPoints = secondPoints;
        const thirdPlace = this.contestantMap.get(tournamentEvent.third);
        thirdPlace.points += thirdPoints;
        tournamentEvent.thirdPoints = thirdPoints;
        const fourthPlace = this.contestantMap.get(tournamentEvent.fourth);
        fourthPlace.points += fourthPoints;
        tournamentEvent.fourthPoints = fourthPoints;
    }
    calculateOvertimeEventPoints(tournamentEvent) {
        if (tournamentEvent.first) {
            const firstPlace = this.contestantMap.get(tournamentEvent.first);
            firstPlace.points += 1;
            tournamentEvent.firstPoints = 1;
        }
    }
    setPlaceOrder() {
        const contestants = Array.from(this.contestantMap.values());
        this.placeOrder = this.setTieBreakerOrder(contestants);
    }
    setTieBreakerOrder(contestantNames) {
        const result = contestantNames.sort((x, y) => {
            if (x.points !== y.points) {
                return y.points - x.points;
            }
            if (this.getFinishesForContestant(x.name, 'first') !== this.getFinishesForContestant(y.name, 'first')) {
                return this.compareNumberOfFinishes(this.getFinishesForContestant(x.name, 'first'), this.getFinishesForContestant(y.name, 'first'));
            }
            else if (this.getFinishesForContestant(x.name, 'second') !== this.getFinishesForContestant(y.name, 'second')) {
                return this.compareNumberOfFinishes(this.getFinishesForContestant(x.name, 'second'), this.getFinishesForContestant(y.name, 'second'));
            }
            else if (this.getFinishesForContestant(x.name, 'third') !== this.getFinishesForContestant(y.name, 'third')) {
                return this.compareNumberOfFinishes(this.getFinishesForContestant(x.name, 'third'), this.getFinishesForContestant(y.name, 'third'));
            }
            x.isTied = true;
            y.isTied = true;
            return 0;
        });
        return result;
    }
    getFinishesForContestant(contestantName, place) {
        return this.tieBreakerMap.get(`${contestantName} - ${place}`) ? this.tieBreakerMap.get(`${contestantName} - ${place}`) : 0;
    }
    compareNumberOfFinishes(x, y) {
        if (x > y) {
            return -1;
        }
        if (x < y) {
            return 1;
        }
        return 0;
    }
    setSortedEvents() {
        this.eventIterator = Array.from(this.eventsByRoundMap.entries()).sort(function (a, b) { return b[0] - a[0]; });
    }
    calculateBestPresentation(tournamentEvent) {
        var _a, _b;
        const numberOfWinners = (_a = tournamentEvent.bestPresentation) === null || _a === void 0 ? void 0 : _a.length;
        let pointsToAward;
        if (numberOfWinners === 1) {
            pointsToAward = 3;
        }
        else if (numberOfWinners === 2) {
            pointsToAward = 1.5;
        }
        else {
            pointsToAward = 1;
        }
        let winnerCounter = 0;
        (_b = tournamentEvent.bestPresentation) === null || _b === void 0 ? void 0 : _b.forEach(winner => {
            this.contestantMap.get(winner).points += pointsToAward;
            this.contestantMap.get(winner).isBestPresentation = true;
            let seperator = winnerCounter === 0 ? '' : ' , ';
            this.bestPresentationWinners += `${seperator}${winner}`;
            winnerCounter++;
        });
    }
}
TournamentParentComponent.ɵfac = function TournamentParentComponent_Factory(t) { return new (t || TournamentParentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
TournamentParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TournamentParentComponent, selectors: [["app-tournament-parent"]], decls: 2, vars: 2, consts: [["class", "centered", 4, "ngIf"], [4, "ngIf"], [1, "centered"], [1, "container"], [1, "row"], [3, "isFinalRound", "placeOrder"], [1, "col-12"], ["multi", "false"], [4, "ngFor", "ngForOf"], [3, "roundNumber", "bestPresentationWinners", "unfilteredEvents"]], template: function TournamentParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TournamentParentComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TournamentParentComponent_div_1_Template, 10, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _logo_scoreboard_logo_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__["LogoScoreboardComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _event_card_by_round_event_card_by_round_component__WEBPACK_IMPORTED_MODULE_8__["EventCardByRoundComponent"]], styles: [".centered[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n}\n\n.panel-top[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3VybmFtZW50LXBhcmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0oiLCJmaWxlIjoidG91cm5hbWVudC1wYXJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TournamentParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tournament-parent',
                templateUrl: './tournament-parent.component.html',
                styleUrls: ['./tournament-parent.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rules_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/scoring/scoring.component */ "o7Dm");
/* harmony import */ var _rules_hosting_hosting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/hosting/hosting.component */ "EyH0");
/* harmony import */ var _rules_wildcard_wildcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/wildcard/wildcard.component */ "qr+h");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _logo_scoreboard_logo_scoreboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logo-scoreboard/logo-scoreboard.component */ "t6xv");
/* harmony import */ var _logo_scoreboard_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logo-scoreboard/score-card/score-card.component */ "4uN5");
/* harmony import */ var _tournament_parent_tournament_parent_tournament_parent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tournament-parent/tournament-parent/tournament-parent.component */ "TxGy");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _event_admin_parent_event_admin_parent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./event-admin-parent/event-admin-parent.component */ "K6su");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _tournament_parent_event_card_by_round_event_card_by_round_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tournament-parent/event-card-by-round/event-card-by-round.component */ "EJf0");
/* harmony import */ var _tournament_parent_event_card_by_round_event_result_event_result_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tournament-parent/event-card-by-round/event-result/event-result.component */ "cgmD");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _rules_tiebreakers_tiebreakers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/tiebreakers/tiebreakers.component */ "IzAj");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _tournament_parent_event_card_by_round_best_presentation_award_best_presentation_award_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tournament-parent/event-card-by-round/best-presentation-award/best-presentation-award.component */ "k6UC");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _nav_bar_content_modal_content_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nav-bar/content-modal/content-modal.component */ "MA+w");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _nav_bar_content_modal_rules_content_rules_content_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./nav-bar/content-modal/rules-content/rules-content.component */ "q/Oc");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _rules_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_4__["ScoringComponent"],
        _rules_hosting_hosting_component__WEBPACK_IMPORTED_MODULE_5__["HostingComponent"],
        _rules_wildcard_wildcard_component__WEBPACK_IMPORTED_MODULE_6__["WildcardComponent"],
        _logo_scoreboard_logo_scoreboard_component__WEBPACK_IMPORTED_MODULE_10__["LogoScoreboardComponent"],
        _logo_scoreboard_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_11__["ScoreCardComponent"],
        _tournament_parent_tournament_parent_tournament_parent_component__WEBPACK_IMPORTED_MODULE_12__["TournamentParentComponent"],
        _event_admin_parent_event_admin_parent_component__WEBPACK_IMPORTED_MODULE_17__["EventAdminParentComponent"],
        _tournament_parent_event_card_by_round_event_card_by_round_component__WEBPACK_IMPORTED_MODULE_19__["EventCardByRoundComponent"],
        _tournament_parent_event_card_by_round_event_result_event_result_component__WEBPACK_IMPORTED_MODULE_20__["EventResultComponent"],
        _rules_tiebreakers_tiebreakers_component__WEBPACK_IMPORTED_MODULE_22__["TiebreakersComponent"],
        _tournament_parent_event_card_by_round_best_presentation_award_best_presentation_award_component__WEBPACK_IMPORTED_MODULE_25__["BestPresentationAwardComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavBarComponent"],
        _nav_bar_content_modal_content_modal_component__WEBPACK_IMPORTED_MODULE_27__["ContentModalComponent"],
        _nav_bar_content_modal_rules_content_rules_content_component__WEBPACK_IMPORTED_MODULE_29__["RulesContentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _rules_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_4__["ScoringComponent"],
                    _rules_hosting_hosting_component__WEBPACK_IMPORTED_MODULE_5__["HostingComponent"],
                    _rules_wildcard_wildcard_component__WEBPACK_IMPORTED_MODULE_6__["WildcardComponent"],
                    _logo_scoreboard_logo_scoreboard_component__WEBPACK_IMPORTED_MODULE_10__["LogoScoreboardComponent"],
                    _logo_scoreboard_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_11__["ScoreCardComponent"],
                    _tournament_parent_tournament_parent_tournament_parent_component__WEBPACK_IMPORTED_MODULE_12__["TournamentParentComponent"],
                    _event_admin_parent_event_admin_parent_component__WEBPACK_IMPORTED_MODULE_17__["EventAdminParentComponent"],
                    _tournament_parent_event_card_by_round_event_card_by_round_component__WEBPACK_IMPORTED_MODULE_19__["EventCardByRoundComponent"],
                    _tournament_parent_event_card_by_round_event_result_event_result_component__WEBPACK_IMPORTED_MODULE_20__["EventResultComponent"],
                    _rules_tiebreakers_tiebreakers_component__WEBPACK_IMPORTED_MODULE_22__["TiebreakersComponent"],
                    _tournament_parent_event_card_by_round_best_presentation_award_best_presentation_award_component__WEBPACK_IMPORTED_MODULE_25__["BestPresentationAwardComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavBarComponent"],
                    _nav_bar_content_modal_content_modal_component__WEBPACK_IMPORTED_MODULE_27__["ContentModalComponent"],
                    _nav_bar_content_modal_rules_content_rules_content_component__WEBPACK_IMPORTED_MODULE_29__["RulesContentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cgmD":
/*!**********************************************************************************************!*\
  !*** ./src/app/tournament-parent/event-card-by-round/event-result/event-result.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EventResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResultComponent", function() { return EventResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





function EventResultComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
function EventResultComponent_div_7_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function EventResultComponent_div_7_td_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventResultComponent_div_7_td_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventResultComponent_div_7_td_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventResultComponent_div_7_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventResultComponent_div_7_td_4_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventResultComponent_div_7_td_4_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventResultComponent_div_7_td_4_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getIcon("1st", element_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getIcon("2nd", element_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getIcon("3rd", element_r14));
} }
function EventResultComponent_div_7_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function EventResultComponent_div_7_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.position, "");
} }
function EventResultComponent_div_7_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function EventResultComponent_div_7_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.name);
} }
function EventResultComponent_div_7_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function EventResultComponent_div_7_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.getPoints(element_r20.points), " ");
} }
function EventResultComponent_div_7_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function EventResultComponent_div_7_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.ejc, " ");
} }
function EventResultComponent_div_7_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function EventResultComponent_div_7_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function EventResultComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventResultComponent_div_7_th_3_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventResultComponent_div_7_td_4_Template, 4, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventResultComponent_div_7_th_6_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventResultComponent_div_7_td_7_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventResultComponent_div_7_th_9_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EventResultComponent_div_7_td_10_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EventResultComponent_div_7_th_12_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EventResultComponent_div_7_td_13_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventResultComponent_div_7_th_15_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EventResultComponent_div_7_td_16_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EventResultComponent_div_7_tr_17_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EventResultComponent_div_7_tr_18_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class EventResultComponent {
    constructor(afStorage) {
        this.afStorage = afStorage;
        this.displayedColumns = ['icon', 'position', 'name', 'points', 'ejc'];
        this.dataSource = [];
    }
    ngOnInit() {
        if (this.tournamentEvent.isOvertime) {
            this.populateOvertimeColumns();
        }
        else {
            this.populateColumns();
        }
        this.showImage(this.tournamentEvent.eventName);
        this.getTitleOverlay();
    }
    populateColumns() {
        this.dataSource.push({
            position: '1st', name: this.tournamentEvent.first,
            points: this.tournamentEvent.firstPoints, ejc: this.getEjc(this.tournamentEvent.first)
        });
        this.dataSource.push({
            position: '2nd', name: this.tournamentEvent.second,
            points: this.tournamentEvent.secondPoints, ejc: this.getEjc(this.tournamentEvent.second)
        });
        this.dataSource.push({
            position: '3rd', name: this.tournamentEvent.third,
            points: this.tournamentEvent.thirdPoints, ejc: this.getEjc(this.tournamentEvent.third)
        });
        this.dataSource.push({
            position: '4th', name: this.tournamentEvent.fourth,
            points: this.tournamentEvent.fourthPoints, ejc: this.getEjc(this.tournamentEvent.fourth)
        });
    }
    populateOvertimeColumns() {
        this.dataSource.push({
            position: '1st', name: this.tournamentEvent.first,
            points: this.tournamentEvent.firstPoints, ejc: this.getEjc(this.tournamentEvent.first)
        });
        this.dataSource.push({
            position: '2nd', name: this.tournamentEvent.second,
            points: this.tournamentEvent.secondPoints, ejc: this.getEjc(this.tournamentEvent.second)
        });
    }
    getPoints(points) {
        const pointsString = points && points !== 1 ? 'pts' : 'pt';
        return points ? `${points}${pointsString}` : '';
    }
    getEjc(name) {
        return this.tournamentEvent.ejc.includes(name) ? 'Juiced!' : '';
    }
    getIcon(positionForIcon, element) {
        return positionForIcon === element.position ? true : false;
    }
    showImage(eventName) {
        let storageRef = this.afStorage.storage.ref();
        storageRef.child(`${eventName}.jpg`).getDownloadURL().then((url) => {
            this.eventBannerUrl = url;
        }).catch((error) => {
            this.showImage('default');
        });
    }
    getTitleOverlay() {
        const url = '../../../../assets/';
        this.titleOverlayUrl = this.tournamentEvent.eventDescription ? `${url}event-title-with-subtitle.png` : `${url}event-title.png`;
    }
    isCompletedEvent() {
        return this.tournamentEvent.first ? true : false;
    }
}
EventResultComponent.ɵfac = function EventResultComponent_Factory(t) { return new (t || EventResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"])); };
EventResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventResultComponent, selectors: [["app-event-result"]], inputs: { tournamentEvent: "tournamentEvent" }, decls: 8, vars: 10, consts: [[1, "eventContainer", 3, "ngStyle"], [1, "eventContainerOverlay", 3, "ngStyle"], [1, "event-title"], [1, "event-description"], ["class", "table-spacer", 4, "ngIf"], [4, "ngIf"], [1, "table-spacer"], ["mat-table", "", 1, "mat-elevation-z8", "event-score-table", 3, "dataSource"], ["matColumnDef", "icon"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "points"], ["matColumnDef", "ejc"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["src", "../../../../assets/trophy1use.svg", 1, "event-table-icon"], ["src", "../../../../assets/silver-medal -use.svg", 1, "event-table-icon"], ["src", "../../../../assets/bronze-medal - use.svg", 1, "event-table-icon"], ["mat-header-row", ""], ["mat-row", ""]], template: function EventResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventResultComponent_div_6_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventResultComponent_div_7_Template, 19, 3, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx.eventBannerUrl + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "url(" + ctx.titleOverlayUrl + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tournamentEvent.eventName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tournamentEvent.eventDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCompletedEvent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompletedEvent());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["tr.mat-header-row[_ngcontent-%COMP%] {\n  height: 1px !important;\n  text-align: center !important;\n}\n\n.mat-column-position[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  width: 45px !important;\n}\n\n.mat-column-points[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  width: 70px !important;\n  text-align: center !important;\n}\n\n.mat-column-ejc[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  width: 70px !important;\n  text-align: right !important;\n  color: #fd5462;\n}\n\n.mat-column-icon[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  width: 60px !important;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  width: 60px !important;\n}\n\n.event-score-table[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  width: 288px;\n  background-color: #555555;\n}\n\n.eventContainer[_ngcontent-%COMP%] {\n  width: 288px;\n  height: 80px;\n  margin: auto;\n  background-size: cover;\n  background-position: center;\n}\n\n.eventContainerOverlay[_ngcontent-%COMP%] {\n  width: 288px;\n  height: 80px;\n  margin: auto;\n  background-repeat: no-repeat;\n  background-size: 270px 85px;\n}\n\n.event-title[_ngcontent-%COMP%] {\n  font-family: \"Bungee\", cursive;\n  font-size: 12px;\n  padding-left: 10px;\n}\n\n.event-description[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  padding-left: 10px;\n}\n\n.table-spacer[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXZlbnQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKIiwiZmlsZSI6ImV2ZW50LXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgdHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNvbHVtbi1wb3NpdGlvbiB7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLXBvaW50cyB7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4tZWpjIHsgXHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOnJnYigyNTMsIDg0LCA5OClcclxuICB9XHJcblxyXG4gIC5tYXQtY29sdW1uLWljb24geyBcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY29sdW1uLW5hbWUgeyBcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXZlbnQtc2NvcmUtdGFibGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI4OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCA4NSwgODUpO1xyXG4gIH1cclxuXHJcbiAgLmV2ZW50Q29udGFpbmVye1xyXG4gICAgd2lkdGg6IDI4OHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ldmVudENvbnRhaW5lck92ZXJsYXl7XHJcbiAgICB3aWR0aDogMjg4cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNzBweCA4NXB4O1xyXG4gIH1cclxuXHJcbiAgLmV2ZW50LXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXZlbnQtZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IDEwLjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1zcGFjZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-result',
                templateUrl: './event-result.component.html',
                styleUrls: ['./event-result.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }]; }, { tournamentEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "k6UC":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tournament-parent/event-card-by-round/best-presentation-award/best-presentation-award.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BestPresentationAwardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPresentationAwardComponent", function() { return BestPresentationAwardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class BestPresentationAwardComponent {
    constructor() { }
    ngOnInit() {
    }
}
BestPresentationAwardComponent.ɵfac = function BestPresentationAwardComponent_Factory(t) { return new (t || BestPresentationAwardComponent)(); };
BestPresentationAwardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestPresentationAwardComponent, selectors: [["app-best-presentation-award"]], inputs: { bestPresentationWinners: "bestPresentationWinners" }, decls: 9, vars: 1, consts: [[1, "award-container"], [1, "container"], [1, "row", "text-small"], [1, "col-8"], ["src", "../../../assets/ribbon.png", 1, "event-table-icon"], [1, "col-4"]], template: function BestPresentationAwardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Best Overall Presentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bestPresentationWinners, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]], styles: [".award-container[_ngcontent-%COMP%] {\n  background-color: #555555;\n  padding: 5px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  width: 288px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.col-8[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 66.6666666667%;\n  padding: 0px;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n  padding: 0px;\n}\n\n.text-small[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmVzdC1wcmVzZW50YXRpb24tYXdhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSiIsImZpbGUiOiJiZXN0LXByZXNlbnRhdGlvbi1hd2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hd2FyZC1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjg4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLTgge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sLTQge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BestPresentationAwardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-best-presentation-award',
                templateUrl: './best-presentation-award.component.html',
                styleUrls: ['./best-presentation-award.component.scss']
            }]
    }], function () { return []; }, { bestPresentationWinners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "o7Dm":
/*!****************************************************!*\
  !*** ./src/app/rules/scoring/scoring.component.ts ***!
  \****************************************************/
/*! exports provided: ScoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoringComponent", function() { return ScoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScoringComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScoringComponent.ɵfac = function ScoringComponent_Factory(t) { return new (t || ScoringComponent)(); };
ScoringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoringComponent, selectors: [["app-scoring"]], decls: 34, vars: 0, consts: [[1, "bungee-rules-header"], [1, "font-mono"]], template: function ScoringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Scoring\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Excelsior Brave Champions, welcome to the Texas Invitational Open Tournament! Your requested presence is a victory in itself, as only the most elite are asked to participate. However, to win the true prize, you must showcase your abilities and dedication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The tournament will take place over four enchanting evenings, with one host leading their fellow champions through a maximum of two events of their choosing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Do you have what it takes to succeed? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Single Event Scoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1st: 8pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2nd: 6pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3rd: 4pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4th: 2pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Double Event Scoring (Per Event)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1st: 4pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2nd: 3pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3rd: 2pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "4th: 1pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".expansion-panel-margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #05054d;\n}\n\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY29yaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUM7RUFDRyxzQkFBQTtBQUNKIiwiZmlsZSI6InNjb3JpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5zaW9uLXBhbmVsLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgNSwgNzcpO1xyXG4gIH1cclxuXHJcbiAuZm9udC1tb25vIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scoring',
                templateUrl: './scoring.component.html',
                styleUrls: ['./scoring.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "q/Oc":
/*!********************************************************************************!*\
  !*** ./src/app/nav-bar/content-modal/rules-content/rules-content.component.ts ***!
  \********************************************************************************/
/*! exports provided: RulesContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesContentComponent", function() { return RulesContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rules_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rules/scoring/scoring.component */ "o7Dm");
/* harmony import */ var _rules_hosting_hosting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rules/hosting/hosting.component */ "EyH0");
/* harmony import */ var _rules_wildcard_wildcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../rules/wildcard/wildcard.component */ "qr+h");
/* harmony import */ var _rules_tiebreakers_tiebreakers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../rules/tiebreakers/tiebreakers.component */ "IzAj");






class RulesContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
RulesContentComponent.ɵfac = function RulesContentComponent_Factory(t) { return new (t || RulesContentComponent)(); };
RulesContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesContentComponent, selectors: [["app-rules-content"]], decls: 8, vars: 0, consts: [[1, "rules-block"]], template: function RulesContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-scoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-wildcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-tiebreakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_rules_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_1__["ScoringComponent"], _rules_hosting_hosting_component__WEBPACK_IMPORTED_MODULE_2__["HostingComponent"], _rules_wildcard_wildcard_component__WEBPACK_IMPORTED_MODULE_3__["WildcardComponent"], _rules_tiebreakers_tiebreakers_component__WEBPACK_IMPORTED_MODULE_4__["TiebreakersComponent"]], styles: [".rules-block[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccnVsZXMtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoicnVsZXMtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ydWxlcy1ibG9ja3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rules-content',
                templateUrl: './rules-content.component.html',
                styleUrls: ['./rules-content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qr+h":
/*!******************************************************!*\
  !*** ./src/app/rules/wildcard/wildcard.component.ts ***!
  \******************************************************/
/*! exports provided: WildcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildcardComponent", function() { return WildcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WildcardComponent {
    constructor() { }
    ngOnInit() {
    }
}
WildcardComponent.ɵfac = function WildcardComponent_Factory(t) { return new (t || WildcardComponent)(); };
WildcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WildcardComponent, selectors: [["app-wildcard"]], decls: 17, vars: 0, consts: [[1, "bungee-rules-header"], [1, "font-mono"], [1, "font-mono-red"]], template: function WildcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Extra Juice\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Did someone say they need more juice!?!? One of the hallmarks of THE TEXAS INVIATIONAL OPEN TOURNEMENT TM is the infamous EXTRA JUICE CARD! Over the course of the four nights, a Champion may proclaim that they \"Need The Juice!\" for a chance to earn extra moist bonus points. This may only be done once, before an event, and only if the Champion is NOT THE HOST. Bonus points are awarded as described below, but beware! If you ask for the juice and dont deliver you may be penalized! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "EJP (Extra Juice Points)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1st: \u00A0 3pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2nd: -2pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3rd: \u00A0 1pt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4th: \u00A0 0pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".expansion-panel-margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #05054d;\n}\n\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n\n.font-mono-red[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #dd0012;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3aWxkY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6IndpbGRjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuc2lvbi1wYW5lbC1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDUsIDc3KTtcclxuICB9XHJcblxyXG4uZm9udC1tb25vIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5mb250LW1vbm8tcmVkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjpyZ2IoMjIxLCAwLCAxOClcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WildcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wildcard',
                templateUrl: './wildcard.component.html',
                styleUrls: ['./wildcard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t6xv":
/*!**************************************************************!*\
  !*** ./src/app/logo-scoreboard/logo-scoreboard.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoScoreboardComponent", function() { return LogoScoreboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score-card/score-card.component */ "4uN5");




class LogoScoreboardComponent {
    constructor() {
        this.placeOrder = [];
        this.currentRound = 0;
        this.isFinalRound = false;
        this.placeCount = 0;
        this.numberOfContestantsTied = 0;
        this.contestantPositionMap = new Map;
        this.isAllContestantsTied = false;
    }
    ngOnInit() {
        this.placeOrder.forEach(contestant => {
            this.contestantPositionMap.set(contestant, this.getPlace(contestant));
        });
        if (this.placeCount === 0) {
            this.isAllContestantsTied = true;
        }
    }
    getPlace(contestant) {
        if (contestant.isTied && contestant.points !== this.previousTiedPointsValue) {
            this.placeCount += this.numberOfContestantsTied;
            this.numberOfContestantsTied = 0;
            this.previousTiedPointsValue = contestant.points;
            this.numberOfContestantsTied += 1;
            return this.getPlaceFromNumber(this.placeCount);
        }
        if (contestant.isTied && contestant.points === this.previousTiedPointsValue) {
            this.numberOfContestantsTied += 1;
            return this.getPlaceFromNumber(this.placeCount);
        }
        this.placeCount += this.numberOfContestantsTied;
        this.numberOfContestantsTied = 0;
        const place = this.getPlaceFromNumber(this.placeCount);
        this.placeCount++;
        return place;
    }
    getPlaceFromNumber(place) {
        switch (place) {
            case 0:
                return '1st';
            case 1:
                return '2nd';
            case 2:
                return '3rd';
            case 3:
                return '4th';
            default:
                return '';
        }
    }
}
LogoScoreboardComponent.ɵfac = function LogoScoreboardComponent_Factory(t) { return new (t || LogoScoreboardComponent)(); };
LogoScoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoScoreboardComponent, selectors: [["app-logo-scoreboard"]], inputs: { placeOrder: "placeOrder", currentRound: "currentRound", isFinalRound: "isFinalRound" }, decls: 33, vars: 17, consts: [[3, "ngClass"], [1, "row"], ["col", "", "align-self-center", "", 1, "col-6"], [3, "isFinalRound", "place", "isAllContestantsTied", "contestant"]], template: function LogoScoreboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-score-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-score-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-score-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-score-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isFinalRound ? "logo-container-final-results" : "logo-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFinalRound", ctx.isFinalRound)("place", ctx.contestantPositionMap.get(ctx.placeOrder[0]))("isAllContestantsTied", ctx.isAllContestantsTied)("contestant", ctx.placeOrder[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFinalRound", ctx.isFinalRound)("place", ctx.contestantPositionMap.get(ctx.placeOrder[1]))("isAllContestantsTied", ctx.isAllContestantsTied)("contestant", ctx.placeOrder[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFinalRound", ctx.isFinalRound)("place", ctx.contestantPositionMap.get(ctx.placeOrder[2]))("isAllContestantsTied", ctx.isAllContestantsTied)("contestant", ctx.placeOrder[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFinalRound", ctx.isFinalRound)("place", ctx.contestantPositionMap.get(ctx.placeOrder[3]))("isAllContestantsTied", ctx.isAllContestantsTied)("contestant", ctx.placeOrder[3]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_2__["ScoreCardComponent"]], styles: [".logo-container[_ngcontent-%COMP%] {\n  background-image: url('tourney-logo.png');\n  height: 420px;\n  max-width: 400px;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-size: contain;\n}\n\n.logo-container-final-results[_ngcontent-%COMP%] {\n  background-image: url('tourney-logo-final-results.png');\n  height: 420px;\n  max-width: 400px;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ28tc2NvcmVib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksdURBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoibG9nby1zY29yZWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdG91cm5leS1sb2dvLnBuZycpO1xyXG4gICAgaGVpZ2h0OiA0MjBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXItZmluYWwtcmVzdWx0c3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3RvdXJuZXktbG9nby1maW5hbC1yZXN1bHRzLnBuZycpO1xyXG4gICAgaGVpZ2h0OiA0MjBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoScoreboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo-scoreboard',
                templateUrl: './logo-scoreboard.component.html',
                styleUrls: ['./logo-scoreboard.component.scss']
            }]
    }], function () { return []; }, { placeOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentRound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFinalRound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vedz":
/*!**************************************!*\
  !*** ./src/app/models/contestant.ts ***!
  \**************************************/
/*! exports provided: Contestant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contestant", function() { return Contestant; });
class Contestant {
    constructor() {
        this.isTied = false;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map