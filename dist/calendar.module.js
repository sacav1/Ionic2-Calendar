"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
require("intl");
require("intl/locale-data/jsonp/en");
var monthview_1 = require("./monthview");
var weekview_1 = require("./weekview");
var dayview_1 = require("./dayview");
var calendar_1 = require("./calendar");
var init_position_scroll_1 = require("./init-position-scroll");
var NgCalendarModule = (function () {
    function NgCalendarModule() {
    }
    NgCalendarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        monthview_1.MonthViewComponent, weekview_1.WeekViewComponent, dayview_1.DayViewComponent, calendar_1.CalendarComponent, init_position_scroll_1.initPositionScrollComponent
                    ],
                    imports: [ionic_angular_1.IonicModule],
                    exports: [calendar_1.CalendarComponent],
                    entryComponents: [calendar_1.CalendarComponent]
                },] },
    ];
    NgCalendarModule.ctorParameters = function () { return []; };
    return NgCalendarModule;
}());
exports.NgCalendarModule = NgCalendarModule;
//# sourceMappingURL=calendar.module.js.map