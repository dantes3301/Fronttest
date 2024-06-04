import replace from "gulp-replace";
import plumder from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
export const plugins = {
    replace: replace,
    plumber: plumder,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}