const pug = require("pug");

function pugRenderer(data, locals) {
  return pug.compile(data.text, {
    filename: data.path,
    ...data.config
  })(locals);
}

hexo.extend.renderer.register("pug", "html", pugRenderer);
