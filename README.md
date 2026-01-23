# Toggle Fold

一个简单的编辑器插件（支持 VS Code 和 Cursor），允许使用单个快捷键（默认 `Cmd + [` 或 `Ctrl + [`）在“折叠所有”和“展开所有”之间切换。

## 功能

- **单键切换**：按一下折叠，再按一下展开。
- **可配置**：你可以自定义折叠时执行的命令。

## 使用方法

1.  安装插件。
2.  默认快捷键为 `Cmd + [` (Mac) 或 `Ctrl + [` (Win/Linux)。
3.  第一次按下时，执行“折叠所有”。
4.  第二次按下时，执行“展开所有”。

## 配置

你可以通过 `settings.json` 修改折叠时使用的命令：

```json
{
  "toggleFold.foldCommand": "editor.foldAllExcept"
}
```

可选值：

- `editor.foldAll` (默认)
- `editor.foldAllExcept` (折叠除光标所在区域外的所有代码)
- `editor.foldAllMarkerRegions`
- 等等...

## 开发

1.  克隆仓库。
2.  运行 `pnpm install`。
3.  按 `F5` 启动调试。

## 打包与发布

### 打包插件

将插件打包成 `.vsix` 文件，可以方便地分享或安装：

1.  **确保已编译代码**

    ```bash
    pnpm run compile
    ```

2.  **执行打包命令**

    ```bash
    pnpm run package
    ```

    这会在项目根目录生成一个 `.vsix` 文件，例如 `toggle-fold-0.0.1.vsix`。

### 本地安装

有两种方式安装打包好的插件：

**方式一：通过命令行安装**

```bash
code --install-extension toggle-fold-0.0.1.vsix
```

或者在 Cursor 中：

```bash
cursor --install-extension toggle-fold-0.0.1.vsix
```

**方式二：通过编辑器界面安装**

1.  打开 VS Code 或 Cursor
2.  进入扩展面板（`Cmd + Shift + X` 或 `Ctrl + Shift + X`）
3.  点击右上角的 `...` 菜单
4.  选择"从 VSIX 安装..."
5.  选择生成的 `.vsix` 文件

### 发布到市场（可选）

如果你想将插件发布到 VS Code 市场：

1.  **获取 Personal Access Token**

    前往 [Azure DevOps](https://dev.azure.com/) 创建一个 PAT（需要 Marketplace 权限）。

2.  **登录 vsce**

    ```bash
    npx vsce login <你的发布者名称>
    ```

3.  **发布插件**

    ```bash
    npx vsce publish
    ```

    或者发布特定版本：

    ```bash
    npx vsce publish patch  # 0.0.1 -> 0.0.2
    npx vsce publish minor  # 0.0.1 -> 0.1.0
    npx vsce publish major  # 0.0.1 -> 1.0.0
    ```

> **提示**：发布前请确保 `package.json` 中填写了正确的 `publisher`、`repository` 等字段，并添加了插件图标和详细的描述。
