使用umi4心得（踩坑）

1. 使用umi4的api插件，需要安装@umijs/max-plugin-openapi插件，否则会报错

2. 使用umi4的api插件，需要安装swagger-ui-dist插件，否则会报错

3. 使用umi4的api插件，umi-presets-pro也可以使用，预装的有api生成插件

4. 需要先设置package.json的name，否则会报错。而且这个name就是生成的api的文件夹名称
