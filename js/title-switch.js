(() => {
  const hiddenTitle = "(づ｡◕‿‿◕｡)づ 你先别走呀~";
  const visibleTitle = "(๑•̀ㅂ•́)و✧ 欢迎回来呀~";
  const restoreDelay = 2000;

  let defaultTitle = document.title;
  let restoreTimer = null;

  const clearRestoreTimer = () => {
    if (restoreTimer) {
      window.clearTimeout(restoreTimer);
      restoreTimer = null;
    }
  };

  const captureTitle = () => {
    const currentTitle = document.title.trim();
    if (currentTitle && currentTitle !== hiddenTitle && currentTitle !== visibleTitle) {
      defaultTitle = currentTitle;
    }
  };

  document.addEventListener("visibilitychange", () => {
    clearRestoreTimer();
    captureTitle();

    if (document.hidden) {
      document.title = hiddenTitle;
      return;
    }

    document.title = visibleTitle;
    restoreTimer = window.setTimeout(() => {
      document.title = defaultTitle;
      restoreTimer = null;
    }, restoreDelay);
  });
})();
