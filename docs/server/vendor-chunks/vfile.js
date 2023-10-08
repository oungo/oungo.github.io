"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile";
exports.ids = ["vendor-chunks/vfile"];
exports.modules = {

/***/ "(rsc)/./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar path = __webpack_require__(/*! path */ \"path\");\nvar replace = __webpack_require__(/*! replace-ext */ \"(rsc)/./node_modules/replace-ext/index.js\");\nvar buffer = __webpack_require__(/*! is-buffer */ \"(rsc)/./node_modules/is-buffer/index.js\");\nmodule.exports = VFile;\nvar own = {}.hasOwnProperty;\nvar proto = VFile.prototype;\n// Order of setting (least specific to most), we need this because otherwise\n// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a\n// stem can be set.\nvar order = [\n    \"history\",\n    \"path\",\n    \"basename\",\n    \"stem\",\n    \"extname\",\n    \"dirname\"\n];\nproto.toString = toString;\n// Access full path (`~/index.min.js`).\nObject.defineProperty(proto, \"path\", {\n    get: getPath,\n    set: setPath\n});\n// Access parent path (`~`).\nObject.defineProperty(proto, \"dirname\", {\n    get: getDirname,\n    set: setDirname\n});\n// Access basename (`index.min.js`).\nObject.defineProperty(proto, \"basename\", {\n    get: getBasename,\n    set: setBasename\n});\n// Access extname (`.js`).\nObject.defineProperty(proto, \"extname\", {\n    get: getExtname,\n    set: setExtname\n});\n// Access stem (`index.min`).\nObject.defineProperty(proto, \"stem\", {\n    get: getStem,\n    set: setStem\n});\n// Construct a new file.\nfunction VFile(options) {\n    var prop;\n    var index;\n    var length;\n    if (!options) {\n        options = {};\n    } else if (typeof options === \"string\" || buffer(options)) {\n        options = {\n            contents: options\n        };\n    } else if (\"message\" in options && \"messages\" in options) {\n        return options;\n    }\n    if (!(this instanceof VFile)) {\n        return new VFile(options);\n    }\n    this.data = {};\n    this.messages = [];\n    this.history = [];\n    this.cwd = process.cwd();\n    // Set path related properties in the correct order.\n    index = -1;\n    length = order.length;\n    while(++index < length){\n        prop = order[index];\n        if (own.call(options, prop)) {\n            this[prop] = options[prop];\n        }\n    }\n    // Set non-path related properties.\n    for(prop in options){\n        if (order.indexOf(prop) === -1) {\n            this[prop] = options[prop];\n        }\n    }\n}\nfunction getPath() {\n    return this.history[this.history.length - 1];\n}\nfunction setPath(path) {\n    assertNonEmpty(path, \"path\");\n    if (path !== this.path) {\n        this.history.push(path);\n    }\n}\nfunction getDirname() {\n    return typeof this.path === \"string\" ? path.dirname(this.path) : undefined;\n}\nfunction setDirname(dirname) {\n    assertPath(this.path, \"dirname\");\n    this.path = path.join(dirname || \"\", this.basename);\n}\nfunction getBasename() {\n    return typeof this.path === \"string\" ? path.basename(this.path) : undefined;\n}\nfunction setBasename(basename) {\n    assertNonEmpty(basename, \"basename\");\n    assertPart(basename, \"basename\");\n    this.path = path.join(this.dirname || \"\", basename);\n}\nfunction getExtname() {\n    return typeof this.path === \"string\" ? path.extname(this.path) : undefined;\n}\nfunction setExtname(extname) {\n    var ext = extname || \"\";\n    assertPart(ext, \"extname\");\n    assertPath(this.path, \"extname\");\n    if (ext) {\n        if (ext.charAt(0) !== \".\") {\n            throw new Error(\"`extname` must start with `.`\");\n        }\n        if (ext.indexOf(\".\", 1) !== -1) {\n            throw new Error(\"`extname` cannot contain multiple dots\");\n        }\n    }\n    this.path = replace(this.path, ext);\n}\nfunction getStem() {\n    return typeof this.path === \"string\" ? path.basename(this.path, this.extname) : undefined;\n}\nfunction setStem(stem) {\n    assertNonEmpty(stem, \"stem\");\n    assertPart(stem, \"stem\");\n    this.path = path.join(this.dirname || \"\", stem + (this.extname || \"\"));\n}\n// Get the value of the file.\nfunction toString(encoding) {\n    var value = this.contents || \"\";\n    return buffer(value) ? value.toString(encoding) : String(value);\n}\n// Assert that `part` is not a path (i.e., does not contain `path.sep`).\nfunction assertPart(part, name) {\n    if (part.indexOf(path.sep) !== -1) {\n        throw new Error(\"`\" + name + \"` cannot be a path: did not expect `\" + path.sep + \"`\");\n    }\n}\n// Assert that `part` is not empty.\nfunction assertNonEmpty(part, name) {\n    if (!part) {\n        throw new Error(\"`\" + name + \"` cannot be empty\");\n    }\n}\n// Assert `path` exists.\nfunction assertPath(path, name) {\n    if (!path) {\n        throw new Error(\"Setting `\" + name + \"` requires `path` to be set too\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxLQUFLLFdBQ3hCQSxLQUFLNkMsUUFBUSxDQUFDLElBQUksQ0FBQzdDLElBQUksRUFBRSxJQUFJLENBQUMrQyxPQUFPLElBQ3JDTDtBQUNOO0FBRUEsU0FBU2hCLFFBQVF5QixJQUFJO0lBQ25CWixlQUFlWSxNQUFNO0lBQ3JCTCxXQUFXSyxNQUFNO0lBQ2pCLElBQUksQ0FBQ25ELElBQUksR0FBR0EsS0FBSzRDLElBQUksQ0FBQyxJQUFJLENBQUNILE9BQU8sSUFBSSxJQUFJVSxPQUFRLEtBQUksQ0FBQ0osT0FBTyxJQUFJLEVBQUM7QUFDckU7QUFFQSw2QkFBNkI7QUFDN0IsU0FBU25DLFNBQVN3QyxRQUFRO0lBQ3hCLElBQUlDLFFBQVEsSUFBSSxDQUFDdEIsUUFBUSxJQUFJO0lBQzdCLE9BQU81QixPQUFPa0QsU0FBU0EsTUFBTXpDLFFBQVEsQ0FBQ3dDLFlBQVlFLE9BQU9EO0FBQzNEO0FBRUEsd0VBQXdFO0FBQ3hFLFNBQVNQLFdBQVdTLElBQUksRUFBRUMsSUFBSTtJQUM1QixJQUFJRCxLQUFLakIsT0FBTyxDQUFDdEMsS0FBS3lELEdBQUcsTUFBTSxDQUFDLEdBQUc7UUFDakMsTUFBTSxJQUFJUCxNQUNSLE1BQU1NLE9BQU8seUNBQXlDeEQsS0FBS3lELEdBQUcsR0FBRztJQUVyRTtBQUNGO0FBRUEsbUNBQW1DO0FBQ25DLFNBQVNsQixlQUFlZ0IsSUFBSSxFQUFFQyxJQUFJO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTTtRQUNULE1BQU0sSUFBSUwsTUFBTSxNQUFNTSxPQUFPO0lBQy9CO0FBQ0Y7QUFFQSx3QkFBd0I7QUFDeEIsU0FBU2IsV0FBVzNDLElBQUksRUFBRXdELElBQUk7SUFDNUIsSUFBSSxDQUFDeEQsTUFBTTtRQUNULE1BQU0sSUFBSWtELE1BQU0sY0FBY00sT0FBTztJQUN2QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvdmZpbGUvY29yZS5qcz9hNDIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIHJlcGxhY2UgPSByZXF1aXJlKCdyZXBsYWNlLWV4dCcpXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZVxuXG4vLyBPcmRlciBvZiBzZXR0aW5nIChsZWFzdCBzcGVjaWZpYyB0byBtb3N0KSwgd2UgbmVlZCB0aGlzIGJlY2F1c2Ugb3RoZXJ3aXNlXG4vLyBge3N0ZW06ICdhJywgcGF0aDogJ34vYi5qcyd9YCB3b3VsZCB0aHJvdywgYXMgYSBwYXRoIGlzIG5lZWRlZCBiZWZvcmUgYVxuLy8gc3RlbSBjYW4gYmUgc2V0LlxudmFyIG9yZGVyID0gWydoaXN0b3J5JywgJ3BhdGgnLCAnYmFzZW5hbWUnLCAnc3RlbScsICdleHRuYW1lJywgJ2Rpcm5hbWUnXVxuXG5wcm90by50b1N0cmluZyA9IHRvU3RyaW5nXG5cbi8vIEFjY2VzcyBmdWxsIHBhdGggKGB+L2luZGV4Lm1pbi5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAncGF0aCcsIHtnZXQ6IGdldFBhdGgsIHNldDogc2V0UGF0aH0pXG5cbi8vIEFjY2VzcyBwYXJlbnQgcGF0aCAoYH5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Rpcm5hbWUnLCB7Z2V0OiBnZXREaXJuYW1lLCBzZXQ6IHNldERpcm5hbWV9KVxuXG4vLyBBY2Nlc3MgYmFzZW5hbWUgKGBpbmRleC5taW4uanNgKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Jhc2VuYW1lJywge2dldDogZ2V0QmFzZW5hbWUsIHNldDogc2V0QmFzZW5hbWV9KVxuXG4vLyBBY2Nlc3MgZXh0bmFtZSAoYC5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZXh0bmFtZScsIHtnZXQ6IGdldEV4dG5hbWUsIHNldDogc2V0RXh0bmFtZX0pXG5cbi8vIEFjY2VzcyBzdGVtIChgaW5kZXgubWluYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdzdGVtJywge2dldDogZ2V0U3RlbSwgc2V0OiBzZXRTdGVtfSlcblxuLy8gQ29uc3RydWN0IGEgbmV3IGZpbGUuXG5mdW5jdGlvbiBWRmlsZShvcHRpb25zKSB7XG4gIHZhciBwcm9wXG4gIHZhciBpbmRleFxuICB2YXIgbGVuZ3RoXG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnIHx8IGJ1ZmZlcihvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7Y29udGVudHM6IG9wdGlvbnN9XG4gIH0gZWxzZSBpZiAoJ21lc3NhZ2UnIGluIG9wdGlvbnMgJiYgJ21lc3NhZ2VzJyBpbiBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IFZGaWxlKG9wdGlvbnMpXG4gIH1cblxuICB0aGlzLmRhdGEgPSB7fVxuICB0aGlzLm1lc3NhZ2VzID0gW11cbiAgdGhpcy5oaXN0b3J5ID0gW11cbiAgdGhpcy5jd2QgPSBwcm9jZXNzLmN3ZCgpXG5cbiAgLy8gU2V0IHBhdGggcmVsYXRlZCBwcm9wZXJ0aWVzIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuICBpbmRleCA9IC0xXG4gIGxlbmd0aCA9IG9yZGVyLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJvcCA9IG9yZGVyW2luZGV4XVxuXG4gICAgaWYgKG93bi5jYWxsKG9wdGlvbnMsIHByb3ApKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBub24tcGF0aCByZWxhdGVkIHByb3BlcnRpZXMuXG4gIGZvciAocHJvcCBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9yZGVyLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXVxufVxuXG5mdW5jdGlvbiBzZXRQYXRoKHBhdGgpIHtcbiAgYXNzZXJ0Tm9uRW1wdHkocGF0aCwgJ3BhdGgnKVxuXG4gIGlmIChwYXRoICE9PSB0aGlzLnBhdGgpIHtcbiAgICB0aGlzLmhpc3RvcnkucHVzaChwYXRoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERpcm5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZGlybmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldERpcm5hbWUoZGlybmFtZSkge1xuICBhc3NlcnRQYXRoKHRoaXMucGF0aCwgJ2Rpcm5hbWUnKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4oZGlybmFtZSB8fCAnJywgdGhpcy5iYXNlbmFtZSlcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZW5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBzZXRCYXNlbmFtZShiYXNlbmFtZSkge1xuICBhc3NlcnROb25FbXB0eShiYXNlbmFtZSwgJ2Jhc2VuYW1lJylcbiAgYXNzZXJ0UGFydChiYXNlbmFtZSwgJ2Jhc2VuYW1lJylcbiAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgYmFzZW5hbWUpXG59XG5cbmZ1bmN0aW9uIGdldEV4dG5hbWUoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZXh0bmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldEV4dG5hbWUoZXh0bmFtZSkge1xuICB2YXIgZXh0ID0gZXh0bmFtZSB8fCAnJ1xuXG4gIGFzc2VydFBhcnQoZXh0LCAnZXh0bmFtZScpXG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZXh0bmFtZScpXG5cbiAgaWYgKGV4dCkge1xuICAgIGlmIChleHQuY2hhckF0KDApICE9PSAnLicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGV4dG5hbWVgIG11c3Qgc3RhcnQgd2l0aCBgLmAnKVxuICAgIH1cblxuICAgIGlmIChleHQuaW5kZXhPZignLicsIDEpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgY2Fubm90IGNvbnRhaW4gbXVsdGlwbGUgZG90cycpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5wYXRoID0gcmVwbGFjZSh0aGlzLnBhdGgsIGV4dClcbn1cblxuZnVuY3Rpb24gZ2V0U3RlbSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnXG4gICAgPyBwYXRoLmJhc2VuYW1lKHRoaXMucGF0aCwgdGhpcy5leHRuYW1lKVxuICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldFN0ZW0oc3RlbSkge1xuICBhc3NlcnROb25FbXB0eShzdGVtLCAnc3RlbScpXG4gIGFzc2VydFBhcnQoc3RlbSwgJ3N0ZW0nKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBzdGVtICsgKHRoaXMuZXh0bmFtZSB8fCAnJykpXG59XG5cbi8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIGZpbGUuXG5mdW5jdGlvbiB0b1N0cmluZyhlbmNvZGluZykge1xuICB2YXIgdmFsdWUgPSB0aGlzLmNvbnRlbnRzIHx8ICcnXG4gIHJldHVybiBidWZmZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcoZW5jb2RpbmcpIDogU3RyaW5nKHZhbHVlKVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgcGFydGAgaXMgbm90IGEgcGF0aCAoaS5lLiwgZG9lcyBub3QgY29udGFpbiBgcGF0aC5zZXBgKS5cbmZ1bmN0aW9uIGFzc2VydFBhcnQocGFydCwgbmFtZSkge1xuICBpZiAocGFydC5pbmRleE9mKHBhdGguc2VwKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGEgcGF0aDogZGlkIG5vdCBleHBlY3QgYCcgKyBwYXRoLnNlcCArICdgJ1xuICAgIClcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgcGFydGAgaXMgbm90IGVtcHR5LlxuZnVuY3Rpb24gYXNzZXJ0Tm9uRW1wdHkocGFydCwgbmFtZSkge1xuICBpZiAoIXBhcnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBlbXB0eScpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBwYXRoYCBleGlzdHMuXG5mdW5jdGlvbiBhc3NlcnRQYXRoKHBhdGgsIG5hbWUpIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZXR0aW5nIGAnICsgbmFtZSArICdgIHJlcXVpcmVzIGBwYXRoYCB0byBiZSBzZXQgdG9vJylcbiAgfVxufVxuIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwicmVwbGFjZSIsImJ1ZmZlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJWRmlsZSIsIm93biIsImhhc093blByb3BlcnR5IiwicHJvdG8iLCJwcm90b3R5cGUiLCJvcmRlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXRQYXRoIiwic2V0Iiwic2V0UGF0aCIsImdldERpcm5hbWUiLCJzZXREaXJuYW1lIiwiZ2V0QmFzZW5hbWUiLCJzZXRCYXNlbmFtZSIsImdldEV4dG5hbWUiLCJzZXRFeHRuYW1lIiwiZ2V0U3RlbSIsInNldFN0ZW0iLCJvcHRpb25zIiwicHJvcCIsImluZGV4IiwibGVuZ3RoIiwiY29udGVudHMiLCJkYXRhIiwibWVzc2FnZXMiLCJoaXN0b3J5IiwiY3dkIiwicHJvY2VzcyIsImNhbGwiLCJpbmRleE9mIiwiYXNzZXJ0Tm9uRW1wdHkiLCJwdXNoIiwiZGlybmFtZSIsInVuZGVmaW5lZCIsImFzc2VydFBhdGgiLCJqb2luIiwiYmFzZW5hbWUiLCJhc3NlcnRQYXJ0IiwiZXh0bmFtZSIsImV4dCIsImNoYXJBdCIsIkVycm9yIiwic3RlbSIsImVuY29kaW5nIiwidmFsdWUiLCJTdHJpbmciLCJwYXJ0IiwibmFtZSIsInNlcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/vfile/core.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar VMessage = __webpack_require__(/*! vfile-message */ \"(rsc)/./node_modules/vfile-message/index.js\");\nvar VFile = __webpack_require__(/*! ./core.js */ \"(rsc)/./node_modules/vfile/core.js\");\nmodule.exports = VFile;\nvar proto = VFile.prototype;\nproto.message = message;\nproto.info = info;\nproto.fail = fail;\n// Create a message with `reason` at `position`.\n// When an error is passed in as `reason`, copies the stack.\nfunction message(reason, position, origin) {\n    var filePath = this.path;\n    var message = new VMessage(reason, position, origin);\n    if (filePath) {\n        message.name = filePath + \":\" + message.name;\n        message.file = filePath;\n    }\n    message.fatal = false;\n    this.messages.push(message);\n    return message;\n}\n// Fail: creates a vmessage, associates it with the file, and throws it.\nfunction fail() {\n    var message = this.message.apply(this, arguments);\n    message.fatal = true;\n    throw message;\n}\n// Info: creates a vmessage, associates it with the file, and marks the fatality\n// as null.\nfunction info() {\n    var message = this.message.apply(this, arguments);\n    message.fatal = null;\n    return message;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdmZpbGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN2QixJQUFJQyxRQUFRRCxtQkFBT0EsQ0FBQztBQUVwQkUsT0FBT0MsT0FBTyxHQUFHRjtBQUVqQixJQUFJRyxRQUFRSCxNQUFNSSxTQUFTO0FBRTNCRCxNQUFNRSxPQUFPLEdBQUdBO0FBQ2hCRixNQUFNRyxJQUFJLEdBQUdBO0FBQ2JILE1BQU1JLElBQUksR0FBR0E7QUFFYixnREFBZ0Q7QUFDaEQsNERBQTREO0FBQzVELFNBQVNGLFFBQVFHLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlDLFdBQVcsSUFBSSxDQUFDQyxJQUFJO0lBQ3hCLElBQUlQLFVBQVUsSUFBSVAsU0FBU1UsUUFBUUMsVUFBVUM7SUFFN0MsSUFBSUMsVUFBVTtRQUNaTixRQUFRUSxJQUFJLEdBQUdGLFdBQVcsTUFBTU4sUUFBUVEsSUFBSTtRQUM1Q1IsUUFBUVMsSUFBSSxHQUFHSDtJQUNqQjtJQUVBTixRQUFRVSxLQUFLLEdBQUc7SUFFaEIsSUFBSSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ1o7SUFFbkIsT0FBT0E7QUFDVDtBQUVBLHdFQUF3RTtBQUN4RSxTQUFTRTtJQUNQLElBQUlGLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVDO0lBRXZDZCxRQUFRVSxLQUFLLEdBQUc7SUFFaEIsTUFBTVY7QUFDUjtBQUVBLGdGQUFnRjtBQUNoRixXQUFXO0FBQ1gsU0FBU0M7SUFDUCxJQUFJRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFQztJQUV2Q2QsUUFBUVUsS0FBSyxHQUFHO0lBRWhCLE9BQU9WO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy92ZmlsZS9pbmRleC5qcz9iMDgwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgVk1lc3NhZ2UgPSByZXF1aXJlKCd2ZmlsZS1tZXNzYWdlJylcbnZhciBWRmlsZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGVcblxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlXG5cbnByb3RvLm1lc3NhZ2UgPSBtZXNzYWdlXG5wcm90by5pbmZvID0gaW5mb1xucHJvdG8uZmFpbCA9IGZhaWxcblxuLy8gQ3JlYXRlIGEgbWVzc2FnZSB3aXRoIGByZWFzb25gIGF0IGBwb3NpdGlvbmAuXG4vLyBXaGVuIGFuIGVycm9yIGlzIHBhc3NlZCBpbiBhcyBgcmVhc29uYCwgY29waWVzIHRoZSBzdGFjay5cbmZ1bmN0aW9uIG1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKSB7XG4gIHZhciBmaWxlUGF0aCA9IHRoaXMucGF0aFxuICB2YXIgbWVzc2FnZSA9IG5ldyBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pXG5cbiAgaWYgKGZpbGVQYXRoKSB7XG4gICAgbWVzc2FnZS5uYW1lID0gZmlsZVBhdGggKyAnOicgKyBtZXNzYWdlLm5hbWVcbiAgICBtZXNzYWdlLmZpbGUgPSBmaWxlUGF0aFxuICB9XG5cbiAgbWVzc2FnZS5mYXRhbCA9IGZhbHNlXG5cbiAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG5cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuLy8gRmFpbDogY3JlYXRlcyBhIHZtZXNzYWdlLCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIGZpbGUsIGFuZCB0aHJvd3MgaXQuXG5mdW5jdGlvbiBmYWlsKCkge1xuICB2YXIgbWVzc2FnZSA9IHRoaXMubWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG5cbiAgbWVzc2FnZS5mYXRhbCA9IHRydWVcblxuICB0aHJvdyBtZXNzYWdlXG59XG5cbi8vIEluZm86IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgbWFya3MgdGhlIGZhdGFsaXR5XG4vLyBhcyBudWxsLlxuZnVuY3Rpb24gaW5mbygpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBudWxsXG5cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cbiJdLCJuYW1lcyI6WyJWTWVzc2FnZSIsInJlcXVpcmUiLCJWRmlsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm90byIsInByb3RvdHlwZSIsIm1lc3NhZ2UiLCJpbmZvIiwiZmFpbCIsInJlYXNvbiIsInBvc2l0aW9uIiwib3JpZ2luIiwiZmlsZVBhdGgiLCJwYXRoIiwibmFtZSIsImZpbGUiLCJmYXRhbCIsIm1lc3NhZ2VzIiwicHVzaCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/vfile/index.js\n");

/***/ })

};
;