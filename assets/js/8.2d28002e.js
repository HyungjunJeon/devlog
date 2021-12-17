(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{393:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-프로젝트-gh-pages-배포"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-프로젝트-gh-pages-배포"}},[t._v("#")]),t._v(" Vue 프로젝트 gh-pages 배포")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Vue 프로젝트 생성")])]),t._v(" "),a("li",[a("p",[t._v("프로젝트 최상단에 아래와 같이 vue.config.js 파일 생성")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  publicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/<Repo>/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("프로젝트 최상단에 아래와 같이 deploy.sh 파일 생성")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 오류 발생 시 중단")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build 후 결과물이 만들어진 디렉터리로 이동")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# init + add + commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# S*에는 commit message가 들어감")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$*")]),t._v('"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://<UserName>.github.io에 배포하는 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f https://github.com/<UserName>/<UserName>.github.io git master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://<UserName>/github.io/<Repo>에 배포하는 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".git master:gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v('터미널에서 sh deploy.sh "커밋 메시지" 입력')])]),t._v(" "),a("li",[a("p",[t._v("gh-pages를 이용한 배포 완료")])]),t._v(" "),a("li",[a("p",[t._v("배포 이후 추가로 commit을 했을 때 기록을 남기고 싶으면 아래와 같이 deploy.sh 파일 수정")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 오류 발생 시 중단")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build 후 결과물이 만들어진 디렉터리로 이동")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://<USERNAME>.github.io 에 배포하는 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git clone https://github.com/<USERNAME>/<USERNAME>.github.io/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b gh-pages https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .git의 내용을 복사한 후 clone은 삭제")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -rf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/.git ./.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add + commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# S*에는 commit message가 들어감")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$*")]),t._v('"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push origin master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v('앞에서와 마찬가지로 터미널에서 sh deploy.sh "커밋 메시지" 입력')])])])}),[],!1,null,null,null);s.default=e.exports}}]);