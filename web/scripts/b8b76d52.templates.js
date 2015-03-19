Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"about-hero-container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nav-bar", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n<div class=\"container about-the-demo\">\n  <div class=\"row\">\n    <div class=\"col-xs-8 col-xs-offset-2 about-text\">\n      <h2>About this demo</h2>\n       <div>\n          This National Atlantic wealth management demo illustrates how real-time video can \n          enhance the online customer service for the financial services industry. Built by \n          the team at TokBox, Inc., a Telefonica Digital company, National Atlantic demonstrates \n          the full range of capabilities from our OpenTok for Customer Service SDK. \n      </div>\n      <div>\n          Whether you're setting up a call center for an online retail website, building a scheduling \n          system for a video telemedicine practice, or enhancing the <span class=\"font-bug-fix\">“</span>call my agent<span class=\"font-bug-fix\">”</span> feature for a real \n          estate practice <span class=\"font-bug-fix\">–</span> OpenTok for Customer Service allows for simple integration of real-time video \n          into the familiar landscape of your current website or mobile app.\n      </div>\n      <div>\n          TokBox is fundamentally changing the way we communicate online. It's now easier than ever to add \n          enterprise-grade, WebRTC video communication to any web or mobile application with the platform OpenTok.\n       </div>\n       <div>\n          \"The National Atlantic demo is a great way to exhibit OpenTok for the financial services industry, where \n          we see more and more companies combining the convenience of online banking with the high touch experience \n          you get with live video. It<span class=\"font-bug-fix\">’</span>s our mission to make WebRTC video easy so that you can focus on the needs of \n          your customers and the growth of your business.\"\n        </div>\n        <div>\n          - Ian Small, CEO\n       </div>\n    </div>\n  </div>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSharedContentOpen", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isSharedContentOpen", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                  <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideSharedContent", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <div class=\"col-xs-11\">\n                      <h3>Investment Recommendations</h3>\n                    </div>\n                    <div class=\"col-xs-1\">\n                      <h2>-</h2>\n                    </div>\n                  </div>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showSharedContent", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                  <div class=\"col-xs-11\">\n                    <h3>Investment Recommendations</h3>\n                  </div>\n                  <div class=\"col-xs-1\">\n                    <h2>+</h2>\n                  </div>\n                </div>\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"col-xs-12\">\n                  <h3 class=\"disable-investment-rec-title\">Investment Recommendations</h3>\n                </div>\n              ");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"row investment-line\">\n              <div class=\"col-xs-12\">\n                  <h4 class=\"line\"></h4>\n              </div>\n            </div>\n            ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n              <div class=\"row shared-content\">\n                <div class=\"col-xs-12 white-container\">\n                  <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n                  <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" />\n                </div>\n              </div>\n              ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                        ");
  hashContexts = {'transaction': depth0,'index': depth0};
  hashTypes = {'transaction': "ID",'index': "ID"};
  options = {hash:{
    'transaction': (""),
    'index': ("_view.contentIndex")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['account-transaction'] || depth0['account-transaction']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "account-transaction", options))));
  data.buffer.push("\n                      ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                      ");
  hashContexts = {'transaction': depth0,'index': depth0};
  hashTypes = {'transaction': "ID",'index': "ID"};
  options = {hash:{
    'transaction': (""),
    'index': ("_view.contentIndex")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['account-transaction'] || depth0['account-transaction']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "account-transaction", options))));
  data.buffer.push("\n                  ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"row\">\n          <div class=\"col-xs-10 col-xs-offset-1 chat-widget-container\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "chat-widget", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </div>\n        </div>\n        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"row\">\n          <div class=\"col-xs-10 col-xs-offset-1 chat-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "startChat", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div class=\"row\">\n              <div class=\"chat-table\">\n                <div class=\"chat-table-cell\">\n                  <div class=\"col-xs-3\">\n                    <img src=\"images/otcs-rep-thumbnail.png\" />\n                  </div>\n                  <div class=\"col-xs-9\">\n                    <div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "firstMeeting.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    <div>Call ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "firstMeeting.rep.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" now</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":meeting meeting.isToday:highlight")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                  <span>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.meetingTime || depth0.meetingTime),stack1 ? stack1.call(depth0, "meeting.time", options) : helperMissing.call(depth0, "meetingTime", "meeting.time", options))));
  data.buffer.push(":</span>\n                  <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "meeting.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </div>\n                ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                 ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "_view.contentIndex", {hash:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  <div class=\"row session\">\n                    <div class=\"col-xs-4 text-center\">\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "_view.contentIndex", {hash:{},inverse:self.program(30, program30, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <div class=\"col-xs-8\">\n                      <div>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.meetingTime || depth0.meetingTime),stack1 ? stack1.call(depth0, "archive.time", options) : helperMissing.call(depth0, "meetingTime", "archive.time", options))));
  data.buffer.push("</div>\n                      <div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "archive.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "_view.contentIndex", {hash:{},inverse:self.program(37, program37, data),fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                  </div>\n                ");
  return buffer;
  }
function program23(depth0,data) {
  
  
  data.buffer.push("\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <h2 class=\"grey-line\"></h2>\n                    </div>\n                  </div>\n                 ");
  }

function program25(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "archivePending", {hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                      ");
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                        <div class=\"image-holder pending\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showArchiveEntry", "archive", {hash:{
    'target': ("controllers.application")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"images/play_button.png\"></div>\n                        ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                        <div class=\"image-holder\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showArchiveEntry", "archive", {hash:{
    'target': ("controllers.application")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"images/play_button.png\"></div>\n                        ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                        <div class=\"image-holder\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showArchiveEntry", "archive", {hash:{
    'target': ("controllers.application")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"images/play_button.png\"></div>\n                      ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "archivePending", {hash:{},inverse:self.program(35, program35, data),fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program33(depth0,data) {
  
  
  data.buffer.push("\n                      <div>Processing Video...</div>\n                      ");
  }

function program35(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                      <div>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.minutes || depth0.minutes),stack1 ? stack1.call(depth0, "archive.duration", options) : helperMissing.call(depth0, "minutes", "archive.duration", options))));
  data.buffer.push("</div>\n                      ");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                      <div>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.minutes || depth0.minutes),stack1 ? stack1.call(depth0, "archive.duration", options) : helperMissing.call(depth0, "minutes", "archive.duration", options))));
  data.buffer.push("</div>\n                    ");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <p>\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newMeeting.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n          at ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.dayTime || depth0.dayTime),stack1 ? stack1.call(depth0, "newMeeting.time", options) : helperMissing.call(depth0, "dayTime", "newMeeting.time", options))));
  data.buffer.push("\n        </p>\n\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"grey-container full-size\">\n  ");
  hashContexts = {'logout': depth0};
  hashTypes = {'logout': "BOOLEAN"};
  options = {hash:{
    'logout': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['nav-bar'] || depth0['nav-bar']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "nav-bar", options))));
  data.buffer.push("\n  <div class=\"container account-container\">\n    <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <h1>Welcome, Ian</h1>\n        <div class=\"row basic-info\">\n          <div class=\"col-xs-6\">\n            <div>Email: ian@company.com</div>\n            <div>Account no. X789 2246 4350</div>\n          </div>\n          <div class=\"col-xs-6\">\n            <div class=\"pull-right\">Last Login: ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.dayTime || depth0.dayTime),stack1 ? stack1.call(depth0, "oneWeekAgo", options) : helperMissing.call(depth0, "dayTime", "oneWeekAgo", options))));
  data.buffer.push("</div>\n            ");
  data.buffer.push("\n          </div>\n        </div>\n        <div class=\"row info-container\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "sharedContent", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "sharedContent", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "sharedContent", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <div id=\"sharedContent\" class=\"collapse in\">\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "sharedContent", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n\n          </div>\n        </div>\n        <div class=\"row info-container\">\n          <div class=\"col-xs-12 account-overview-col\">\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <h3 class=\"line\">Account Overview</h3>\n              </div>\n            </div>\n            <div class=\"row overview\">\n              <div class=\"col-xs-2 labels\">\n                <h5><strong>Cash</strong></h5>\n                <h5><strong>Equity</strong></h5>\n                <h5><strong>Fixed</strong></h5>\n                <h5><strong>Retirement</strong></h5>\n              </div>\n\n              <div class=\"col-xs-2 col-xs-offset-1 numbers\">\n                <h5>$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalCash", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n                <h5>$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalEquity", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n                <h5>$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalFixed", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n                <h5>$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalRetirement", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <ul class=\"nav nav-tabs text-center\">\n                  <li class=\"active\"><a href=\"#cash\" data-toggle=\"tab\">Cash</a></li>\n                  <li><a href=\"#equity\" data-toggle=\"tab\">Equity</a></li>\n                  <li><a href=\"#fixed\" data-toggle=\"tab\">Fixed</a></li>\n                  <li><a href=\"#retirement\" data-toggle=\"tab\">Retirement</a></li>\n                </ul>\n                <div class=\"tab-content transactions\">\n                  <div class=\"tab-pane active\" id=\"cash\">\n                    <div class=\"transaction-entry\">\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.cashTransactions", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                  </div>\n                  <div class=\"tab-pane\" id=\"equity\">\n                    <div class=\"transaction-entry\">\n                  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.equityTransactions", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n              </div>\n                  <div class=\"tab-pane\" id=\"fixed\">\n                    <div class=\"transaction-entry\">\n                  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.fixedTransactions", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n              </div>\n                  <div class=\"tab-pane\" id=\"retirement\">\n                    <div class=\"transaction-entry\">\n                      <div class=\"row transaction-data\">\n                        <div class=\"col-xs-12\">\n                            <img src=\"/images/retirement_graph.png\" width=\"100%\">\n                        </div>\n                      </div>\n\n                  ");
  data.buffer.push("\n                       ");
  data.buffer.push("\n                  ");
  data.buffer.push("\n                  </div>\n                </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row info-container\">\n            <div class=\"col-xs-12 todays-markets\">\n              <div class=\"row\">\n                <div class=\"col-xs-12\">\n                  <h3 class=\"line\">Today's Markets</h3>\n                </div>\n              </div>\n              <div class=\"white-box\">\n                <div class=\"row market-graphs\">\n                  <div class=\"col-xs-4 market-graph\">\n                      <span>10/9/2015 DOW</span>\n                      <img src=\"/images/first_graph.png\" width=\"100%\">\n                  </div>\n\n                  <div class=\"col-xs-4 market-graph\">\n                      <span>10/09/2015 NASDAQ</span>\n                      <img src=\"/images/second_graph.png\" width=\"100%\">\n                  </div>\n                  <div class=\"col-xs-4 market-graph\">\n                      <span>10/09/2015 S&P INDEX</span>\n                      <img src=\"/images/third_graph.png\" width=\"100%\">\n                  </div>\n              </div>\n\n            <div class=\"row divider\">\n              <div class=\"col-xs-12\">\n                <h2 class=\"line\"></h2>\n              </div>\n            </div>\n            <div class=\"row trading-info-title\">\n              <div class=\"col-xs-12\">\n                Tuesday's Trading:\n              </div>\n            </div>\n            <div class=\"row trading-info\">\n                <div class=\"col-xs-3\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-6 trading-text-blue\">\n                      Dow\n                    </div>\n                    <div class=\"col-xs-6 green-text\">\n                      +70.96\n                    </div>\n\n\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                      15,821.63\n                    </div>\n                    <div class=\"col-xs-6 green-text\">\n                      0.45%\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"col-xs-3 col-xs-offset-1\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-6 trading-text-blue\">\n                      Nasdaq\n                    </div>\n                    <div class=\"col-xs-6 green-text\">\n                      +45.66\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                      3,965.58\n                    </div>\n                    <div class=\"col-xs-6 green-text\">\n                      +1.16%\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-3 col-xs-offset-1\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-6 trading-text-blue\">\n                      S&P\n                    </div>\n                    <div class=\"col-xs-6 green-text\">\n                        +14.31\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-6 pus\">\n                      1,782.00\n                    </div>\n                    <div class=\"col-xs-6 green-text\">\n                      +0.81%\n                    </div>\n                  </div>\n                </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-4 right-container\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "chat", {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        <div class=\"row\">\n          <div class=\"white-container col-xs-10 col-xs-offset-1\">\n            <div class=\"row\">\n              <div class=\"col-xs-12 communication-center\">\n                <h4 class=\"line\">Communication Center</h4>\n                <div class=\"communication-subtitle\">Upcoming Meetings</div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "meeting", "in", "meetings", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                <div class=\"grey-line\"></div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                ");
  hashContexts = {'meetings': depth0};
  hashTypes = {'meetings': "ID"};
  options = {hash:{
    'meetings': ("meetings")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12 sessions\">\n                <div class=\"sessions-title\">Previous advisor sessions available for playback:</div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "archive", "in", "archives", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"meetingModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">New meeting</h4>\n      </div>\n      <div class=\"modal-body\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "newMeeting", {hash:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Add To Calendar</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <video id=\"previewModalVideo\" width=\"640\" height=\"480\" controls>\n              <source ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("archiveVideoUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" type=\"video/mp4\">\n            Your browser does not support the video tag.\n            </video>\n          ");
  return buffer;
  }

  data.buffer.push("<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-table\">\n        <div class=\"modal-tablecell\">\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "archiveVideoUrl", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n</div><!-- /.modal -->\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"pull-left\">\n          <img src=\"/images/logo.png\">\n          <div>\n            \"National Atlantic Bank\" is an OpenTok demo created by TokBox, a Telef<span class=\"font-bug-fix\">ó</span>nica Digital Company.\n          </div>\n          <div>©2015 TokBox Inc.</div>\n        </div>\n        <div class=\"pull-right footer-links\">\n          <ul>\n            <li><a href=\"mailto:support@tokbox.com\">Contact TokBox</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/account-transaction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "index", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"row transaction-data\">\n  <div class=\"col-xs-12\">\n    <div class=\"row\">\n      <div class=\"col-xs-2\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.date", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n      <div class=\"col-xs-4 col-xs-offset-1\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.subtext", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.info", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-2\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "transaction.debt", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div class=\"col-xs-2 col-xs-offset-1\">\n        <div class=\"pull-right\">\n          <strong>$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.total", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"line\"></div>\n    </div>\n  </div>\n ");
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <span class=\"debt\">$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.amount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <span class=\"credit\">$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.amount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "transaction", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/chat-message"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"message\">\n  <div class=\"from\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "from", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n  <div class=\"msg-body\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/chat-widget"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"service-panel\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":chat-widget shouldChatStick:stick :video-holder :on-queue")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    <div class=\"subscriber\"></div>\n    <div class=\"publisher\"></div>\n    <div class=\"text-chat\">\n      <div class=\"history\"></div>\n      <div class=\"new-message\">\n        <input type=\"text\" class=\"form-control message-text\" name=\"new-message\" placeholder=\"Send a text\">\n        <input type=\"button\" class=\"btn btn-send\" name=\"send\" value=\"Send\">\n      </div>\n    </div>\n    <div class=\"bottom-bar\">\n        <button type=\"button\" class=\"btn btn-large btn-danger close-button\">Cancel call</button>\n    </div>\n    <div class=\"waiting\">\n        <p class=\"hardware-access\">Please allow access to your camera and mic.</p>\n        <div class=\"representative\">\n          <p>In the queue</p>\n          <p class=\"big\">2 min</p>\n          <p class=\"small\">Aprox wait</p>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/date-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"date-picker grey-container\"></div>\n");
  
});

Ember.TEMPLATES["components/meeting-calendar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["components/nav-bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <li class=\"user-avatar\"><img src=\"/images/otcs-rep-thumbnail.png\"></li>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <li class=\"logout\"><a href=\"#\">Log Out <img src=\"images/red-arrow-right.png\"></a></li>\n        ");
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">National Atlantic Bank</a>\n    </div>\n    <div class=\"demo-link pull-right\">\n      <ul>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "rep", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "logout", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/rep-chat-widget"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"service-provider\" class=\"rep\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body video-holder\">\n                    <div class=\"subscriber\" ></div>\n                    <div class=\"publisher\" ></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"chat-opts\" class=\"row\" style=\"display: none;\">\n        <div class=\"col-md-12\">\n          <a data-toggle=\"collapse\" href=\"#chat-collapse\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n            Send a text message\n          </a>\n        </div>\n        <div class=\"col-md-12\">\n            <div id=\"chat-collapse\" class=\"panel panel-default collapse\">\n                <div class=\"panel-body\">\n                    <div class=\"dl-horizontal text-chat\">\n                      <div class=\"history\"></div>\n                      <div class=\"new-message\">\n                        <input type=\"text\" class=\"form-control message-text\" name=\"new-message\" placeholder=\"Send a text\">\n                      </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
  
});

Ember.TEMPLATES["components/rep-transaction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "index", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.date", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n      <div class=\"col-xs-6\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.subtext", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.info", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-3 transaction-change\">\n\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "transaction.debt", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </div>\n      <div class=\"col-xs-3\">\n        <div class=\"pull-right\">\n          <strong>$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.total", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"line\"></div>\n    </div>\n  </div>\n ");
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <span class=\"debt\">$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.amount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <span class=\"credit\">$");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "transaction.amount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "transaction", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/select-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <option>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "defaultItem", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</option>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <option>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</option>\n  ");
  return buffer;
  }

  data.buffer.push("<select class=\"selectpicker\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "ID"};
  options = {hash:{
    'id': ("selectId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "defaultItem", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "items", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</select>");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"col-xs-3\">\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "price", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"col-xs-3 credit\">\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "change", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"col-xs-1 credit text-right\">\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "percentage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n          </div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <div class=\"col-xs-1 stock-prices\">\n        <div class=\"row stock-title\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"row stock-price\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "price", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"row stock-change\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "change", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"row stock-percent-change\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "percentage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n      </div>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"hero-container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nav-bar", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  <div class=\"login-table\">\n    <div class=\"login-tablecell\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-6 black-overlay\">\n            <div class=\"row\">\n              <div class=\"col-xs-12 login-header\">\n                <h1>Take charge of your investment strategy</h1>\n                <h3>Log in to manage your portfolio:</h3>\n              </div>\n            </div>\n            <div class=\"row text-center login-input-row\">\n              <div class=\"col-xs-10\">\n                <div class=\"row\">\n                  <div id=\"emailInputHolder\" class=\"col-xs-6\" data-placement=\"bottom\" data-content=\"Email Required\" data-trigger=\"manual\">\n                    ");
  hashContexts = {'value': depth0,'type': depth0,'placeholder': depth0,'name': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'placeholder': "STRING",'name': "STRING"};
  options = {hash:{
    'value': ("email"),
    'type': ("email"),
    'placeholder': ("Your email address"),
    'name': ("email")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                  </div>     \n                  <div id=\"passwordInputHolder\" class=\"col-xs-6\" data-placement=\"bottom\" data-content=\"Password Required\" data-trigger=\"manual\">\n                    ");
  hashContexts = {'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING"};
  options = {hash:{
    'value': ("password"),
    'class': ("password-input"),
    'type': ("password"),
    'placeholder': ("Your password"),
    'name': ("password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("            \n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-2 login-button\">\n                <div id=\"loginButtonHolder\" data-placement=\"top\" data-content=\"Wrong email or password\" data-title=\"Error\" data-trigger=\"manual\">\n                  <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Login <img src=\"/images/white-arrow.png\" /></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"non-responsive\">\n  <div class=\"container\">\n    <div class=\"row top\">\n      <div class=\"col-xs-4\">\n        <h2>Financial solutions</h2>\n        <p>Resources to help you meet your goals.</p>\n      </div>\n      <div class=\"col-xs-5\">\n        <h2>Investment tools</h2>\n        <p>Featured insights and market tools</p>\n      </div>\n      <div class=\"col-xs-4 stock-prices hide\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.stocks", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.stocks", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </div> ");
  data.buffer.push("\n</div> ");
  data.buffer.push("\n<div class=\"hp-middle\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <h2>We're here to help you plan <br>for the future.</h2>\n        <p>\n         When you choose an Atlantic National Bank Advisor, you're entering into a unique long-term relationship. \n         One where your advisor takes the time to develop a thorough understanding of who you are, how you think \n         and what matters most to you. It's a relationship that combines financial experience with intimate knowledge \n         of your priorities to plan, protect and help fulfill your vision of the future.\n       </p>\n      </div>\n      <div class=\"col-xs-6\">\n        <img class=\"img-middle pull-right\" src=\"/images/hp-middle.jpg\">\n      </div>\n    </div>\n  </div> ");
  data.buffer.push("\n</div>");
  data.buffer.push("\n<div class=\"non-responsive\"> \n  <div class=\"container\">\n    <div class=\"row bottom\">\n      <div class=\"col-xs-4\">\n        <h2>Estate planning</h2>\n        <p>\n          We can help you preserve your assets, reduce taxes paid by your heirs and help unlock opportunities for future generations.\n        </p>\n      </div>\n      <div class=\"col-xs-4\">\n        <h2>International investing</h2>\n        <p>\n          We can help you diversify your investments by leveraging global investment research from our respected analysts.\n        </p>\n      </div>\n      <div class=\"col-xs-4\">\n        <h2>Retirement planning</h2>\n        <p>\n          We can guide you along a path to - and through - retirement. We provide guidance, tools, and services to help you prepare for retirement on your terms.\n        </p>\n      </div>\n    </div>\n\n    <h2 class=\"stock-headline\">U.S. Stocks</h2>\n\n    <div class=\"row\">\n      <div class=\"col-xs-6 gainers\">\n        <div class=\"row\">\n          <div class=\"col-xs-11\">\n            <div class=\"row\">\n              <div class=\"col-xs-7\">\n                <p><strong>Gainers</strong></p>\n              </div>\n              <div class=\"col-xs-1\">\n                <p class=\"price\"><strong>Price</strong></p>\n              </div>\n              <div class=\"col-xs-4\">\n                <p class=\"pull-right\"><strong>% Change</strong></p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"line stock-line\"></div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-7 stocks-list\">\n                <ul>\n                  <li><strong>USU</strong> USEC Inc.</li>\n                  <li><strong>ZOOM</strong> ZOOM Technologies,...</li>\n                  <li><strong>ARCW</strong> ARC Group Worldwid...</li>\n                  <li><strong>QTWW</strong> Quantum Fuel Syste...</li>\n                  <li><strong>DQ</strong> Daqo New Energy Corp.</li>\n                </ul>\n              </div>\n              <div class=\"col-xs-1 stock-price stocks-list\">\n                <ul>\n                  <li>10.01</li>\n                  <li>4.39</li>\n                  <li>33.60</li>\n                  <li>6.75</li>\n                  <li>46.55</li>\n                </ul>\n              </div>\n              <div class=\"col-xs-4 stocks-list change\">\n                <ul class=\"change-green pull-right\">\n                  <li>55.68%  <img src=\"/images/green-arrow.png\" /></li>\n                  <li>54.58%  <img src=\"/images/green-arrow.png\" /></li>\n                  <li>43.04%  <img src=\"/images/green-arrow.png\" /></li>\n                  <li>35.27%  <img src=\"/images/green-arrow.png\" /></li>\n                  <li>34.46%  <img src=\"/images/green-arrow.png\" /></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-6 losers\">\n        <div class=\"row\">\n          <div class=\"col-xs-11 stock-table\">\n            <div class=\"row\">\n              <div class=\"col-xs-7\">\n                <p><strong>Losers</strong></p>\n              </div>\n              <div class=\"col-xs-1\">\n                <p class=\"price\"><strong>Price</strong></p>\n              </div>\n              <div class=\"col-xs-4\">\n                <p class=\"pull-right\"><strong>% Change</strong></p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"line stock-line\"></div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-7 stocks-list\">\n                <ul>\n                  <li><strong>MTL</strong> Mechel OAO</li>\n                  <li><strong>PERY</strong> Perry Ellis Inte...</li>\n                  <li><strong>CHGG</strong> Chegg, Inc.</li>\n                  <li><strong>SARA</strong> Saratoga Resourc...</li>\n                  <li><strong>YRCW</strong> YRC Worldwide...</li>\n                </ul>\n              </div>\n              <div class=\"col-xs-1 stock-price stocks-list\">\n                <ul>\n                  <li>2.20</li>\n                  <li>15.00</li>\n                  <li>9.68</li>\n                  <li>1.83</li>\n                  <li>7.72</li>\n                </ul>\n              </div>\n              <div class=\"col-xs-4 stocks-list change\">\n                <ul class=\"change-red pull-right\">\n                  <li>23.34%  <img src=\"/images/red-arrow.png\" /></li>\n                  <li>22.96%  <img src=\"/images/red-arrow.png\" /></li>\n                  <li>22.56%  <img src=\"/images/red-arrow.png\" /></li>\n                  <li>21.12%  <img src=\"/images/red-arrow.png\" /></li>\n                  <li>20.68%  <img src=\"/images/red-arrow.png\" /></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>");
  data.buffer.push("\n  </div> ");
  data.buffer.push("\n</div>");
  data.buffer.push("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["rep"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideScheduleContainer", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Schedule\n                <img class=\"pull-right\" src=\"images/black-arrow-up.png\">\n              </h5>\n              ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openScheduleContainer", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Schedule\n                <img class=\"pull-right\" src=\"images/black-arrow-down.png\">\n\n              </h5>\n              ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                  <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":meeting meeting.isToday:highlight")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                    <span>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.meetingTime || depth0.meetingTime),stack1 ? stack1.call(depth0, "meeting.time", options) : helperMissing.call(depth0, "meetingTime", "meeting.time", options))));
  data.buffer.push(":</span>\n                    <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "meeting.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                  </div>\n                  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hidePreviewSessions", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n              Previous Sessions\n              <img class=\"pull-right\" src=\"images/black-arrow-up.png\">\n            </h5>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openPreviewSessions", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n              Previous Sessions\n              <img class=\"pull-right\" src=\"images/black-arrow-down.png\">\n            </h5>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                <div class=\"row white-container archive\">\n                  <div class=\"col-xs-3 archive-image\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "_view.contentIndex", {hash:{},inverse:self.program(17, program17, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </div>\n                  <div class=\"col-xs-9 archive-text\">\n                    <div>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.meetingTime || depth0.meetingTime),stack1 ? stack1.call(depth0, "archive.time", options) : helperMissing.call(depth0, "meetingTime", "archive.time", options))));
  data.buffer.push("</div>\n                    <div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "archive.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "_view.contentIndex", {hash:{},inverse:self.program(24, program24, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                  </div>\n                </div>\n              ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "archivePending", {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                      <div class=\"pending\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showArchiveEntry", "archive", {hash:{
    'target': ("controllers.application")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"images/play_button.png\"></div>\n                      ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                      <div ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showArchiveEntry", "archive", {hash:{
    'target': ("controllers.application")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"images/play_button.png\"></div>\n                      ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                      <div ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showArchiveEntry", "archive", {hash:{
    'target': ("controllers.application")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"images/play_button.png\"></div>\n                    ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "archivePending", {hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program20(depth0,data) {
  
  
  data.buffer.push("\n                      <div>Processing Video...</div>\n                      ");
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                      <div>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.minutes || depth0.minutes),stack1 ? stack1.call(depth0, "archive.duration", options) : helperMissing.call(depth0, "minutes", "archive.duration", options))));
  data.buffer.push("</div>\n                      ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                      <div>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.minutes || depth0.minutes),stack1 ? stack1.call(depth0, "archive.duration", options) : helperMissing.call(depth0, "minutes", "archive.duration", options))));
  data.buffer.push("</div>\n                    ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                  <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideAccountOverview", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    Account Overview\n                    <img class=\"pull-right\" src=\"images/black-arrow-up.png\">\n                  </h5>\n                  ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                  <h5 ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openAccountOverview", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    Account Overview\n                    <img class=\"pull-right\" src=\"images/black-arrow-down.png\">\n\n                  </h5>\n                  ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                              ");
  hashContexts = {'transaction': depth0,'index': depth0};
  hashTypes = {'transaction': "ID",'index': "ID"};
  options = {hash:{
    'transaction': (""),
    'index': ("_view.contentIndex")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['rep-transaction'] || depth0['rep-transaction']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "rep-transaction", options))));
  data.buffer.push("\n                          ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                           ");
  hashContexts = {'transaction': depth0,'index': depth0};
  hashTypes = {'transaction': "ID",'index': "ID"};
  options = {hash:{
    'transaction': (""),
    'index': ("_view.contentIndex")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['rep-transaction'] || depth0['rep-transaction']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "rep-transaction", options))));
  data.buffer.push("\n                      ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                            ");
  hashContexts = {'transaction': depth0,'index': depth0};
  hashTypes = {'transaction': "ID",'index': "ID"};
  options = {hash:{
    'transaction': (""),
    'index': ("_view.contentIndex")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['rep-transaction'] || depth0['rep-transaction']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "rep-transaction", options))));
  data.buffer.push("\n                      ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideRecommendedFunds", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Recommended Funds\n                <img class=\"pull-right\" src=\"images/black-arrow-up.png\">\n              </h5>\n              ");
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              <h5 class=\"white-line\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openRecommendedFunds", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Recommended Funds\n                <img class=\"pull-right\" src=\"images/black-arrow-down.png\">\n              </h5>\n               ");
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                      <div class=\"col-xs-12\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFund", "_view.contentIndex", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <small ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isSelected:selected")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</small>\n                      </div>\n                    ");
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                        <div class=\"row\">\n                          <div class=\"col-xs-5\">\n                            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("sharedFund.graph")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" width=\"100%\">\n                          </div>\n                          <div class=\"col-xs-4 customer-viewing-text\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "sharedFund.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "sharedFund.timeShared", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                          </div>\n                        </div>\n                      ");
  return buffer;
  }

  data.buffer.push("<div class=\"grey-container full-size\">\n  ");
  hashContexts = {'logout': depth0,'rep': depth0};
  hashTypes = {'logout': "BOOLEAN",'rep': "BOOLEAN"};
  options = {hash:{
    'logout': (true),
    'rep': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['nav-bar'] || depth0['nav-bar']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "nav-bar", options))));
  data.buffer.push("\n  <div class=\"container rep-container\">\n    <div class=\"row\">\n      ");
  data.buffer.push("\n      <div class=\"col-xs-3 left-column\">\n        ");
  data.buffer.push("\n        <h1>Scott Small</h1>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <small>Email: scott@tokbox.com</small>\n          </div>\n          <div class=\"col-xs-12\">\n            <small>Account No. X789 2246 4350</small>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 info-container\">\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isScheduleOpen", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isScheduleOpen", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              <div class=\"collapse in\" id=\"scheduleContainer\">\n                <h6 class=\"meetings-title\">Upcoming meetings</h6>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "meeting", "in", "meetings", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                <h6 class=\"white-line\"> </h6>\n                ");
  data.buffer.push("\n                <div class=\"row calendar\">\n                  <div class=\"col-xs-12\">\n                   ");
  hashContexts = {'meetings': depth0,'enablePicking': depth0,'ignoreToday': depth0};
  hashTypes = {'meetings': "ID",'enablePicking': "BOOLEAN",'ignoreToday': "BOOLEAN"};
  options = {hash:{
    'meetings': ("meetings"),
    'enablePicking': (true),
    'ignoreToday': (true)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n                  </div>\n                </div>\n                ");
  data.buffer.push("\n                <div class=\"row\">\n                  <div class=\"col-xs-12 input-box\">\n                    ");
  hashContexts = {'type': depth0,'value': depth0,'name': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'name': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("meetingTitle"),
    'name': ("Portfolio Update"),
    'placeholder': ("Meeting title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                  </div>\n                  <div class=\"col-xs-12 time-picker\">\n                    ");
  hashContexts = {'defaultItem': depth0,'items': depth0,'selectId': depth0};
  hashTypes = {'defaultItem': "STRING",'items': "ID",'selectId': "STRING"};
  options = {hash:{
    'defaultItem': ("Time"),
    'items': ("times"),
    'selectId': ("time-picker-1000")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['select-picker'] || depth0['select-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "select-picker", options))));
  data.buffer.push("\n                  </div>\n\n                  <div class=\"col-xs-12 schedule-button\">\n                    <img ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scheduleMeeting", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" src=\"/images/schedule_button.png\"/>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n\n\n        ");
  data.buffer.push("\n        <div class=\"row info-container previous-sessions\">\n          <div class=\"col-xs-12\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isPreviewSessionOpen", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isPreviewSessionOpen", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </div>\n          <div class=\"collapse in\" id=\"previousSessionContainer\">\n            <div class=\"col-xs-12 archives\">\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "archive", "in", "archives", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n          </div>\n        </div> ");
  data.buffer.push("\n\n      </div>\n      ");
  data.buffer.push("\n      <div class=\"col-xs-4 center-column\">\n        ");
  data.buffer.push("\n        <div class=\"row\">\n          <div class=\"col-xs-11 col-xs-offset-1 white-container\">\n              <h3>Portfolio Review: 2015</h3>\n              <div class=\"row\">\n\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-12\">\n                  <div class=\"pull-left\">\n                    <small>1:20 - 2:20 PM PST</small>\n                  </div>\n                  <div class=\"pull-right\">\n                    <small>Call Time: <span id=\"callTime\">00:00</span></small>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row portfolio-review-image\">\n                <div class=\"col-xs-12\">\n                  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "rep-chat-widget", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-12\">\n                  <div class=\"grey-line portfolio-review-line\"> </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-12\">\n                  <h5>Today's Agenda:</h5>\n                </div>\n                <div class=\"col-xs-12\">\n\n                <ul class=\"col-xs-12 agenda\">\n                    <li>Review portfolio performance in 2014</li>\n                    <li>Evaluate distribution of funds</li>\n                    <li>New investment opportunities</li>\n                    <li>Set 2015 investment goals</li>\n                    <li>Open questions and concerns</li>\n                  </ul>\n                </div>\n              </div>\n          </div>\n\n\n        </div> ");
  data.buffer.push("\n      </div>\n\n      ");
  data.buffer.push("\n      <div class=\"col-xs-5 right-column\">\n\n        <div class=\"row\">\n          ");
  data.buffer.push("\n          <div class=\"col-xs-11 col-xs-offset-1 info-container\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 account-overview-title\">\n                  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isAccountOverviewOpen", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isAccountOverviewOpen", {hash:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n              </div>\n              <div class=\"collapse in\" id=\"accountOverviewContainer\">\n                ");
  data.buffer.push("\n                <div class=\"row\">\n                    <div class=\"col-xs-2 account-overview-label\">\n                      <strong>Cash</strong>\n                    </div>\n                    <div class=\"col-xs-3 account-overview-cash\">\n                      $127,559.33\n                    </div>\n                      <div class=\"col-xs-3 account-overview-label\">\n                       <strong>Fixed</strong>\n                      </div>\n                      <div class=\"col-xs-4 text-right account-overview-cash\">\n                        $164,832.21\n                      </div>\n                </div>\n                ");
  data.buffer.push("\n                <div class=\"row\">\n                  <div class=\"col-xs-2 account-overview-label\">\n                    <strong>Equity</strong>\n                  </div>\n                  <div class=\"col-xs-3 account-overview-cash\">\n                    $141,112.96\n                  </div>\n                  <div class=\"col-xs-3 account-overview-label\">\n                    <strong>Retirement</strong>\n                  </div>\n                  <div class=\"col-xs-4 text-right account-overview-cash\">\n                    $198,451.43\n                  </div>\n                </div>\n                ");
  data.buffer.push("\n                <div class=\"row account-overview-tabs\">\n                  <div class=\"col-xs-12\">\n                    <ul class=\"nav nav-tabs text-center\">\n                      <li class=\"active tab-label-cash\"><a href=\"#cash\" data-toggle=\"tab\">Cash</a></li>\n                      <li class=\"tab-label-equity\"><a href=\"#equity\" data-toggle=\"tab\">Equity</a></li>\n                      <li class=\"tab-label-fixed\"><a href=\"#fixed\" data-toggle=\"tab\">Fixed</a></li>\n                      <li class=\"tab-label-retirement\"><a href=\"#retirement\" data-toggle=\"tab\">Retirement</a></li>\n                    </ul>\n                    <div class=\"tab-content transactions\">\n                      <div class=\"tab-pane active\" id=\"cash\">\n                        <div class=\"transaction-entry\">\n                          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.cashTransactions", {hash:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"equity\">\n                        <div class=\"transaction-entry\">\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.equityTransactions", {hash:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                  </div>\n                      <div class=\"tab-pane\" id=\"fixed\">\n                        <div class=\"transaction-entry\">\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.fixedTransactions", {hash:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                  </div>\n                      <div class=\"tab-pane\" id=\"retirement\">\n                        <div class=\"transaction-entry\">\n\n                          <div class=\"row transaction-data\">\n                            <div class=\"col-xs-12\">\n                                <img src=\"/images/retirement_graph.png\" width=\"100%\">\n                            </div>\n                          </div>\n                      </div>\n                    </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div> ");
  data.buffer.push("\n            ");
  data.buffer.push("\n            <div class=\"col-xs-11 col-xs-offset-1 rec-funds info-container\">\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isRecommendedFundsOpen", {hash:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isRecommendedFundsOpen", {hash:{},inverse:self.noop,fn:self.program(38, program38, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n              <div class=\"collapse in\" id=\"recommendedFundsContainer\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12\">\n                    <small>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "selectedFundTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</small>\n                  </div>\n                    <div class=\"col-xs-12 funds-image\">\n                      <h2>\n                        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("selectedFundUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" width=\"100%\">\n                      </h2>\n                    </div>\n                    <div class=\"col-xs-12\">\n                      <h4 class=\"white-line\"></h4>\n                    </div>\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "sharedContent", {hash:{},inverse:self.noop,fn:self.program(40, program40, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                    <div class=\"col-xs-12 funds-share-button\">\n                        <img ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shareContent", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"pull-right\" src=\"images/share_button.png\">\n                    </div>\n                    <div class=\"col-xs-12 line-holder\">\n                      <h6 class=\"white-line\"></h6>\n                    </div>\n                    ");
  data.buffer.push("\n                    <div class=\"col-xs-12 customer-viewing\">\n                      <h5>Customer Currently Viewing</h5>\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "sharedFund", {hash:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                    </div> ");
  data.buffer.push("\n\n                </div>\n              </div>\n            </div>");
  data.buffer.push("\n        </div>\n      </div>\n    </div> ");
  data.buffer.push("\n  </div>\n  </div>\n</div>\n");
  return buffer;
  
});