(function() {
    var type_impls = Object.fromEntries([["defguard",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + AdditionalClaims,\n    EF: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + ExtraTokenFields,\n    GC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + GenderClaim,\n    JE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + JwsSigningAlgorithm&lt;JT&gt;,\n    JT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + JsonWebKeyType,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","defguard::handlers::openid_flow::DefguardIdTokenFields"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + AdditionalClaims,\n    EF: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ExtraTokenFields,\n    GC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + GenderClaim,\n    JE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + JwsSigningAlgorithm&lt;JT&gt;,\n    JT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + JsonWebKeyType,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","defguard::handlers::openid_flow::DefguardIdTokenFields"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, AC, EF, GC, JE, JS, JT&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: AdditionalClaims,\n    EF: ExtraTokenFields,\n    GC: GenderClaim,\n    JE: JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: JwsSigningAlgorithm&lt;JT&gt;,\n    JT: JsonWebKeyType,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","defguard::handlers::openid_flow::DefguardIdTokenFields"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: AdditionalClaims,\n    EF: ExtraTokenFields,\n    GC: GenderClaim,\n    JE: JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: JwsSigningAlgorithm&lt;JT&gt;,\n    JT: JsonWebKeyType,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    id_token: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;IdToken&lt;AC, GC, JE, JS, JT&gt;&gt;,\n    extra_fields: EF,\n) -&gt; IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;</h4></section></summary><div class=\"docblock\"><p>Initializes new ID token fields containing the specified [<code>IdToken</code>] and extra fields.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">id_token</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;IdToken&lt;AC, GC, JE, JS, JT&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the [<code>IdToken</code>] contained in the OAuth2 token response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extra_fields\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">extra_fields</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;EF</a></h4></section></summary><div class=\"docblock\"><p>Returns the extra fields contained in the OAuth2 token response.</p>\n</div></details></div></details>",0,"defguard::handlers::openid_flow::DefguardIdTokenFields"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + AdditionalClaims,\n    EF: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + ExtraTokenFields,\n    GC: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + GenderClaim,\n    JE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + JwsSigningAlgorithm&lt;JT&gt;,\n    JT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + JsonWebKeyType,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","defguard::handlers::openid_flow::DefguardIdTokenFields"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: AdditionalClaims,\n    EF: ExtraTokenFields,\n    GC: GenderClaim,\n    JE: JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: JwsSigningAlgorithm&lt;JT&gt;,\n    JT: JsonWebKeyType,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","defguard::handlers::openid_flow::DefguardIdTokenFields"],["<section id=\"impl-ExtraTokenFields-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-ExtraTokenFields-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; ExtraTokenFields for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: AdditionalClaims,\n    EF: ExtraTokenFields,\n    GC: GenderClaim,\n    JE: JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: JwsSigningAlgorithm&lt;JT&gt;,\n    JT: JsonWebKeyType,</div></h3></section>","ExtraTokenFields","defguard::handlers::openid_flow::DefguardIdTokenFields"],["<section id=\"impl-StructuralPartialEq-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-IdTokenFields%3CAC,+EF,+GC,+JE,+JS,+JT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AC, EF, GC, JE, JS, JT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for IdTokenFields&lt;AC, EF, GC, JE, JS, JT&gt;<div class=\"where\">where\n    AC: AdditionalClaims,\n    EF: ExtraTokenFields,\n    GC: GenderClaim,\n    JE: JweContentEncryptionAlgorithm&lt;JT&gt;,\n    JS: JwsSigningAlgorithm&lt;JT&gt;,\n    JT: JsonWebKeyType,</div></h3></section>","StructuralPartialEq","defguard::handlers::openid_flow::DefguardIdTokenFields"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[17352]}