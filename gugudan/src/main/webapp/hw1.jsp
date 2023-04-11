<%-- 2022111321 박지원 --%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>구구단</title>
</head>
<body>
	<h3 style="background-color: skyblue;">구구단 출력</h3>

	<form action="http://localhost:8090/gugudan/gugudan.jsp" method="get"
		accept-charset="utf-8">
		<!-- 폼 데이터 값들을 get 방식으로 해당 경로로 전송한다. -->
		<p>
			숫자 입력 <input type="text" name="inputNum" style="width: 50px;">
			<!-- 입력 받은 숫자를 문자열로 inputNum 이름(id 혹은 공간)에 저장한다.  -->
			<input type="submit" value="입력 완료">
			<!-- submit 타입은 폼에 저장된 데이터 값들을 모두 서버에 전송할 때 사용하는 것으로, 여기서는 입력한 숫자를 서버로 넘긴다. -->
	</form>
</body>
</html>