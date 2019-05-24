// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node$1.0.0/src/app/views/clients/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Clients</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Clients</h1><table id=\"clients\"><tr><td>ID</td><td>Nome</td><td>Idade</td><td>Email</td><td>Editar</td><td>Excluir</td></tr>");

  var for__16 = 0;

  marko_forEach(data.clients, function(client) {
    var keyscope__17 = "[" + ((for__16++) + "]");

    out.w("<tr id=\"client_" +
      marko_escapeXmlAttr(client.id) +
      "\"><td>" +
      marko_escapeXml(client.id) +
      "</td><td>" +
      marko_escapeXml(client.name) +
      "</td><td>" +
      marko_escapeXml(client.age) +
      "</td><td>" +
      marko_escapeXml(client.email) +
      "</td><td><a href=\"/clients/register/" +
      marko_escapeXmlAttr(client.id) +
      "\"><button>Editar</button></a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(client.id) +
      "\" data-type=\"delete\"><button data-ref=\"" +
      marko_escapeXmlAttr(client.id) +
      "\" data-type=\"delete\">Excluir</button></a></td></tr>");
  });

  out.w("</table><script src=\"./static/js/delete-client.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/node$1.0.0/src/app/views/clients/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
