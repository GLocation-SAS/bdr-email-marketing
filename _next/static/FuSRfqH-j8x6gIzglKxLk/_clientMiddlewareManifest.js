self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/bdr-email-marketing(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/bdr-email-marketing(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(es|en))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$",
    "originalSource": "/(es|en)/:path*"
  },
  {
    "regexp": "^\\/bdr-email-marketing(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next|api|uikit|email-marketing|campanas|favicon\\.ico|.*\\..*).*))(\\.json)?[\\/#\\?]?$",
    "originalSource": "/((?!_next|api|uikit|email-marketing|campanas|favicon\\.ico|.*\\..*).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()