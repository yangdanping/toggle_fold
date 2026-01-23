import * as vscode from 'vscode';

// Store the state globally for the session
// false = currently unfolded (or unknown state, assuming unfolded initially)
// true = currently folded
let isFolded = false;

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "toggle fold" is now active!');

  let disposable = vscode.commands.registerCommand('toggle-fold.toggle', async () => {
    const config = vscode.workspace.getConfiguration('toggleFold');
    const foldCommand = config.get<string>('foldCommand', 'editor.foldAll');

    if (isFolded) {
      // Currently folded -> Unfold All
      await vscode.commands.executeCommand('editor.unfoldAll');
      isFolded = false;
      // vscode.window.setStatusBarMessage('Unfolded All', 2000);
    } else {
      // Currently unfolded -> Fold All (or custom command)
      await vscode.commands.executeCommand(foldCommand);
      isFolded = true;
      // vscode.window.setStatusBarMessage('Folded All', 2000);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  // Reset state on deactivate if needed, though usually not necessary for simple toggles
  isFolded = false;
}
