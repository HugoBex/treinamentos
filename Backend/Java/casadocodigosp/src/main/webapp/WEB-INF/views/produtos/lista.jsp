<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Cadastro de Livros</title>

<!-- Bootstrap CSS -->
<link
	href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
	rel="stylesheet">

<link
	href="${pageContext.servletContext.contextPath}/resources/css/mystyle.css"
	type="text/css" rel="stylesheet" />

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

</head>

<body>

	<div class="container">
		<div>
			<h1 class="text-center">Cadastro de livros</h1>

			<c:if test="${msg != null && msg.mensagem.length() > 0}">
				<div
					class="alert alert-success alert-dismissible col-sm-offset-2 col-sm-10"
					role="alert">
					<strong>${msg.titulo}</strong> ${msg.mensagem} <a href="#"
						class="close" data-dismiss="alert" aria-label="close">×</a>
				</div>
			</c:if>


			<table class="table table-striped table-hover">
				<tr>
					<th>Código</th>
					<th>Título</th>
					<th>Descrição</th>
					<th>Páginas</th>
				</tr>
				<c:if test="${produtos.size() > 0}">
					<c:forEach items="${produtos}" var="produto">
						<tr>
							<td>${produto.id}</td>
							<td>${produto.titulo}</td>
							<td>${produto.descricao}</td>
							<td>${produto.paginas}</td>
						</tr>
					</c:forEach>
				</c:if>
			</table>
		</div>
		<div>
			<a class="btn btn-primary text-center"
				href="/casadocodigosp/produtos/form" role="button">Cadastrar
				Produto</a>
		</div>

	</div>
	<!-- jQuery -->
	<script src="//code.jquery.com/jquery.js"></script>
	<!-- Bootstrap JavaScript -->
	<script
		src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</body>

</html>