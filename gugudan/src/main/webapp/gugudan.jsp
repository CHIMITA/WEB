<%-- 2022111321 박지원 --%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>구구단 출력</title>
</head>
<body>

	<%
	String num = request.getParameter("inputNum"); //hw1.jsp에서 inputNum 데이터 값을 가져온다.
	int inputNum = Integer.parseInt(num); //가져온 데이터는 string, 즉 문자열이기 때문에 int형으로 바꾸어준다.

	if (1 >= inputNum || inputNum <= 9) { //변환한 데이터 값이 1보다 크거나 9보다 작다는 조건이 참이면 아래 코드가 이어진다.
		for (int j = 1; j <= 9; j++) { //1부터 9까지 계산 할 수 있도록 반복문을 사용한다.
			out.println(inputNum + "x" + j + "=" + inputNum * j + "<br>");
		}
	} else {
		out.println("1 ~ 9 사이의 숫자만 입력해주세요.<br>");//조건이 거짓일 경우
	}
	%>


	<p>
	<table border="1">
		<%--테이블 윤곽선 두께 --%>
		<%
		if (1 >= inputNum || inputNum <= 9) {
		%>
		<%
		for (int j = 1; j <= 9; j++) {
		%><tr>
			<td>
				<%
				out.println(inputNum + "x" + j + "=" + inputNum * j + "<br>");
				}
				%>
			</td>
			<%
			} else {
			%>
			<%
			out.println("1 ~ 9 사이의 숫자만 입력해주세요.<br>");
			%>
			<%
			}
			%>

		</tr>

	</table>

	<p>
		<a href="javascript:history.go(-1)">이전 페이지</a>
</body>
</html>