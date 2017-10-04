"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_service_1 = require("./calendar.service");
var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step = exports.Step || (exports.Step = {}));
var CalendarComponent = (function () {
    function CalendarComponent(calendarService, appLocale) {
        this.calendarService = calendarService;
        this.appLocale = appLocale;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, Week $n';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'j';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.locale = "";
        this.onCurrentDateChanged = new core_1.EventEmitter();
        this.onRangeChanged = new core_1.EventEmitter();
        this.onEventSelected = new core_1.EventEmitter();
        this.onTimeSelected = new core_1.EventEmitter();
        this.onTitleChanged = new core_1.EventEmitter();
        this.hourParts = 1;
        this.locale = appLocale;
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (!val) {
                val = new Date();
            }
            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourParts = 60 / this.step;
        this.calendarService.queryMode = this.queryMode;
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.prototype.loadEvents = function () {
        this.calendarService.loadEvents();
    };
    return CalendarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], CalendarComponent.prototype, "currentDate", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "eventSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "calendarMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatDay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatDayHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatDayTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatWeekTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatMonthTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "formatHourColumn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "showEventDetail", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "startingDayMonth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "startingDayWeek", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "allDayLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "noEventsLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "queryMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "step", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "autoSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], CalendarComponent.prototype, "markDisabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "dateFormatter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "dir", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "scrollToHour", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "preserveScrollPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "lockSwipes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CalendarComponent.prototype, "locale", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "onRangeChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "onEventSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "onTimeSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "onTitleChanged", void 0);
CalendarComponent = __decorate([
    core_1.Component({
        selector: 'calendar',
        template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
        styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
        providers: [calendar_service_1.CalendarService]
    }),
    __param(1, core_1.Inject(core_1.LOCALE_ID)),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService, String])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.js.map