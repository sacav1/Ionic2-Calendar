"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ionic_angular_1 = require("ionic-angular");
var core_1 = require("@angular/core");
var initPositionScrollComponent = (function (_super) {
    __extends(initPositionScrollComponent, _super);
    function initPositionScrollComponent(el) {
        var _this = _super.call(this) || this;
        _this.onScroll = new core_1.EventEmitter();
        _this.listenerAttached = false;
        _this.element = el;
        return _this;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            this.scrollContent.scrollTop = initPosition.currentValue;
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'init-position-scroll',
                    template: "\n        <ion-scroll scrollY=\"true\" zoom=\"false\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </ion-scroll>\n    "
                },] },
    ];
    initPositionScrollComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    initPositionScrollComponent.propDecorators = {
        'initPosition': [{ type: core_1.Input },],
        'emitEvent': [{ type: core_1.Input },],
        'onScroll': [{ type: core_1.Output },],
    };
    return initPositionScrollComponent;
}(ionic_angular_1.Scroll));
exports.initPositionScrollComponent = initPositionScrollComponent;
//# sourceMappingURL=init-position-scroll.js.map