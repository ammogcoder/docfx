// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
function transform(model, _attrs) {
  // Copy default _attrs and override name/id
  for (var key in _attrs) {
    if (_attrs.hasOwnProperty(key)) {
      if (!model.hasOwnProperty(key)) {
        model[key] = _attrs[key];
      }
    }
  }

  transformItem(model, 1);
  if (model.items && model.items.length > 0) model.leaf = false;
  model.title = "Table of Content";
  return model;

  function transformItem(item, level) {
    item.level = level;
    if (item.items && item.items.length > 0) {
      var length = item.items.length;
      for (var i = 0; i < length; i++) {
        transformItem(item.items[i], level + 1);
      };
    } else {
      item.items = [];
      item.leaf = true;
    }
  }
}
