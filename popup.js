// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

var copyText = document.getElementsByClassName("prettyprinted")
for (var i = 0; i < copyText.length; i++) {
    copyText[i].id = 'prettyprinted'+i;
    copyText[i].append("Copy to Clipboard");
}

$('.prettyprinted').click(function() {
    var currId = $(this).attr('id');
    alert($('#'+currId).text());
});
// how to bind button with function
document.getElementById('button').addEventListener('click', loadUrls);