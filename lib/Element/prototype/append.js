(() => {
  if (typeof Element.prototype.append === 'function') return;

  Element.prototype.append = function (...nodes) {
    const fragment = document.createDocumentFragment();
    for (const node of nodes) {
      fragment.appendChild(
        node instanceof Node ? node : document.createTextNode(node)
      );

      this.appendChild(fragment);
    }
  };
})();
