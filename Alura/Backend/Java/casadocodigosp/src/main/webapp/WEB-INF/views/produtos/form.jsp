<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>


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

<body class="container container-x">

	<h1 class="text-center">Cadastro de livros</h1>

	<form:form class="form-horizontal"
		action="${s:mvcUrl('PC#gravar').build() }" method="post"
		commandName="produto">

		<div class="form-group">
			<label for="titulo" class="col-sm-2 control-label">Título</label>
			<div class="col-sm-8">
				<form:input class="form-control" id="titulo" path="titulo"
					placeholder="Insira o titulo" />
				<form:errors path="titulo" />
			</div>

		</div>

		<div class="form-group">
			<label for="descricao" class="col-sm-2 control-label">Descrição</label>
			<div class="col-sm-8">
				<form:textarea class="form-control" rows="3" path="descricao"
					placeholder="Fale sobre o livro" />
				<form:errors path="descricao" />
			</div>

		</div>

		<div class="form-group">
			<label for="paginas" class="col-sm-2 control-label">N°
				Páginas</label>
			<div class="col-sm-8">
				<form:input class="form-control" path="paginas"
					placeholder="Insira o numero de páginas" min="1" value="0" />
				<form:errors path="paginas" />
			</div>

		</div>

		<div class="form-group">
			<label for="dataLancamento" class="col-sm-2 control-label">Data
				de Lançamento</label>
			<div class="col-sm-8">
				<form:input class="form-control" path="dataLancamento"
					placeholder="dd/mm/aaaa" />
				<form:errors path="dataLancamento" />
			</div>
		</div>

		<c:forEach items="${tipos}" var="tipoPreco" varStatus="status">
			<div class="form-group">
				<label for="preco" class="col-sm-2 control-label">${tipoPreco}</label>
				<div class="col-sm-8">
					<form:input class="form-control"
	     				path="precos[${status.index}].valor"
						placeholder="Insira o preço do ${tipoPreco}"/> 
            			<form:hidden path="precos[${status.index}].tipo" value ="${fn:toUpperCase(tipoPreco)}" />
				<form:errors type="text" path="precos[${status.index}].valor"/>
				</div>
				
			</div>
		</c:forEach>

		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-5">
				<button type="submit" class="btn btn-primary">Gravar</button>
				<a class="btn btn-primary text-center" href="casadocodigo/produtos"
					role="button">Voltar</a>
			</div>
		</div>

	</form:form>
	<!-- jQuery -->
	<script src="//code.jquery.com/jquery.js"></script>
	<!-- Bootstrap JavaScript -->
	<script
		src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</body>

</html>