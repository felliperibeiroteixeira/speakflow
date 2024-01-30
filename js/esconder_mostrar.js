// Cria uma instância de observação
const obs = new IntersectionObserver((entries) => {
	// Itera sobre as entradas observadas
	entries.forEach( (entry) => {
		// Verifica se o elemento está atualmente visível
		if (entry.isIntersecting) {
			// Se estiver visível, adiciona a classe 'mostrar' ao elemento
			entry.target.classList.add('mostrar')
		} else {
			// Se não estiver visível, remove a classe 'mostrar' do elemento
			entry.target.classList.remove('mostrar')
		}
	})
})

// Seleciona todos os elementos com a classe 'esconder'
const elementos = document.querySelectorAll('.esconder')

// Itera sobre os elementos selecionados e observa cada um deles
elementos.forEach( (element) => obs.observe(element))