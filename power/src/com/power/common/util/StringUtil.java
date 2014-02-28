package com.power.common.util;

public class StringUtil {
	public static final String EMPTY = "";

	public static boolean isEmpty(String str) {
		return ((str == null) || (str.length() == 0));
	}

	public static boolean isNotEmpty(String str) {
		return (!(isEmpty(str)));
	}

	public static String trim(String str) {
		return ((str == null) ? null : str.trim());
	}

	public static String lowerFirstCharacter(String target) {
		if (StringUtil.isNotEmpty(target)) {
			char[] targetChars = target.toCharArray();
			targetChars[0] = Character.toLowerCase(targetChars[0]);
			return String.valueOf(targetChars);
		}
		return target;
	}

	public static String upperFirstCharacter(String target) {
		if (StringUtil.isNotEmpty(target)) {
			char[] targetChars = target.toCharArray();
			targetChars[0] = Character.toUpperCase(targetChars[0]);
			return String.valueOf(targetChars);
		}
		return target;
	}

	public static String stripHtmlTags(String htmlCode) {
		String reg = "<\\/?[^>]+>";

		if (StringUtil.isNotEmpty(htmlCode)) {
			htmlCode = htmlCode.replaceAll(reg, "");
			System.out.println(htmlCode);
		}
		return "";
	}

}
