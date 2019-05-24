// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node$1.0.0/src/app/views/clients/register/register.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Register</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Register Clients</h1><form action=\"/clients\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
    marko_escapeXmlAttr(data.client.id) +
    "\"><div><label for=\"name\">Name:</label><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Insert name hear\" value=\"" +
    marko_escapeXmlAttr(data.livro.name) +
    "\"></div><div><label for=\"email\">Email:</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"exemple@exemple.com\" value=\"" +
    marko_escapeXmlAttr(data.livro.email) +
    "\"></div><div><label for=\"age\">Age:</label><input type=\"number\" id=\"age\" name=\"age\" placeholder=\"Insert age hear\" value=\"" +
    marko_escapeXmlAttr(data.livro.age) +
    "\"></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node$1.0.0/src/app/views/clients/register/register.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
