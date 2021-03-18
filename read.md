# eslint和prettier
1. eslint-config-prettier 解决 eslint 和 prettier 的配置冲突
2. eslint-plugin-prettier 基于 prettier 代码风格的 eslint 规则
3. 在eslint的 extends 中配置 plugin:prettier/recommended 继承插件 prettier 插件的配置
4. 在eslint的plugins 中配置 prettier 插件

# stylelint
1. style-config-standard 官网提供的css标准
2. sytle-config-recess-order 属性排列顺序
3. stylelint-prettier 基于 prettier 代码风格的 stylelint 规则
4. stylelint-config-prettier 禁用所有与格式相关的 Stylelint 规则，解决 prettier 与 stylelint 规则冲突，确保将其放在 extends 队列最后，这样它将覆盖其他配置。