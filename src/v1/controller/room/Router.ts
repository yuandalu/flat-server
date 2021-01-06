import { FastifyRoutes } from "../../types/Server";
import { create, createSchemaType } from "./create";
import { schedule, scheduleSchemaType } from "./schedule";
import { list, listSchemaType } from "./list";
import { userInfo, userInfoSchemaType } from "./info/Users";
import { ordinaryInfo, OrdinaryInfoSchemaType } from "./info/Ordinary";
import { periodicInfo, periodicInfoSchemaType } from "./info/Periodic";
import { running, runningSchemaType } from "./update/Running";
import { cancelOrdinary, cancelOrdinarySchemaType } from "./update/CancelOrdinary";
import { stopped, stoppedSchemaType } from "./update/Stopped";
import { join, joinSchemaType } from "./join";

export const httpRoom: Readonly<FastifyRoutes[]> = Object.freeze([
    Object.freeze({
        method: "post",
        path: "room/create",
        handler: create,
        auth: true,
        schema: createSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/schedule",
        handler: schedule,
        auth: true,
        schema: scheduleSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/list/:type",
        handler: list,
        auth: true,
        schema: listSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/join",
        handler: join,
        auth: true,
        schema: joinSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/info/ordinary",
        handler: ordinaryInfo,
        auth: true,
        schema: OrdinaryInfoSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/info/periodic",
        handler: periodicInfo,
        auth: true,
        schema: periodicInfoSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/info/users",
        handler: userInfo,
        auth: true,
        schema: userInfoSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/update/running",
        handler: running,
        auth: true,
        schema: runningSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/update/stopped",
        handler: stopped,
        auth: true,
        schema: stoppedSchemaType,
    }),
    Object.freeze({
        method: "post",
        path: "room/update/cancelOrdinary",
        handler: cancelOrdinary,
        auth: true,
        schema: cancelOrdinarySchemaType,
    }),
]);
