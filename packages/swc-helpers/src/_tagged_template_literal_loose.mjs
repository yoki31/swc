export default function _tagged_template_literal_loose(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
}
