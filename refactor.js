function func(s, a, b) {
	if (s.match(/^$/)) {
		return -1;
	}
	var i = s.length -1;
	var aIndex, bIndex = -1;
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
		var c = s.substring(i, i +1);
		if  (c == a) {
		aIndex = i;
		}
		if (c == b) {
		bIndex = i;
		}
		i = i - 1;
	}
	if (aIndex != -1) {
		if (bIndex == -1) {
			return aIndex;
		}
		else {
			return Math.max(aIndex, bIndex);
		}
	}
	if (bIndex != -1) {
		return bIndex;
	}
	else {
		return -1;
	}
}