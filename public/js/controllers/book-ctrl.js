angular.module('VirtualBook').controller('BookCtrl', function($scope, BookService) {
    BookService.getBooks().then(function(response) {
        $scope.books = response.data;
    });

    $scope.save = function(book) {
        BookService.editBook(book).then(function(response) {
            book = response.data;
        })
    };
    $scope.createBook = function(newBook) {
        BookService.addBook(newBook).then(function(response) {
            $scope.books.push(newBook);
        })
    };
    $scope.deleteBook = function(book) {
        BookService.deleteBook(book).then(function(response) {
            book = response.data;
        })
    }
});