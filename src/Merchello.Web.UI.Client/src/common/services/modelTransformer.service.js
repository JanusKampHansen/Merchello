﻿
    /**
   * @ngdoc model
   * @name merchello.services.modelTransformer
   * @function
   * 
   * @description
   * A utility service that builds local models for API query results
   *  http://odetocode.com/blogs/scott/archive/2014/03/17/building-better-models-for-angularjs.aspx
   */
    var modelTransformer = function() {
        
        // private

        // transforms json object into a local model
        function transformObject(jsonResult, Constructor) {
            var model = new Constructor();
            angular.extend(model, jsonResult);
            return model;
        }

        // public
        return {

            /**
            * @ngdoc method
            * @name merchello.services.modelTransformer#hasPermission
            * @methodOf merchello.services.modelTransformer
            *
            * @description
            * A utility service that builds local models for API query results
            *
            * ##usage
            * <pre>
            * var models = modelTransfomer.transform(jsonArray, [Model]);
            * </pre> 
            *
            * @param {jsonResult} json array (or object) typically returned by a resouce
            * @param {constructor} the model to instantiate        
            * @returns a model or array of models.
            *
            */
            transform: function(jsonResult, Constructor) {
                if (angular.isArray(jsonResult)) {
                    var models = [];
                    angular.forEach(jsonResult, function (object) {
                        models.push(transformObject(object, Constructor));
                    });
                    return models;
                } else {
                    return transformObject(jsonResult, Constructor);
                }
            }
        };

    };

    angular.module('merchello.services').factory('modelTransformer', [], modelTransformer);