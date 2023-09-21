import {defineUserConfig} from "vuepress";
import {autoCatalogPlugin} from "vuepress-plugin-auto-catalog";

import theme from "./theme.js";

export default {
    plugins: [
        autoCatalogPlugin({
            //插件选项
        }),
    ],
    base: "/",
    lang: "zh-CN",
    title: "YufireDe-Blog",
    description: "vuepress-theme-hope 的博客演示",
    theme,
}