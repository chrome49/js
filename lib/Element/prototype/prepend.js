(() => {
  if (typeof Element.prototype.prepend === 'function') return;

  Element.prototype.prepend = function (...nodes) {
    const fragment = document.createDocumentFragment();
    for (const node of nodes) {
      fragment.appendChild(
        node instanceof Node ? node : document.createTextNode(node)
      );

      this.insertBefore(fragment, this.firstChild);
    }
  };
})();
