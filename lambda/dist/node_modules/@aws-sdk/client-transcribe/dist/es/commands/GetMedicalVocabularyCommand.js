import { __extends } from "tslib";
import { GetMedicalVocabularyRequest, GetMedicalVocabularyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetMedicalVocabularyCommand, serializeAws_json1_1GetMedicalVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a medical vocabulary.</p>
 */
var GetMedicalVocabularyCommand = /** @class */ (function (_super) {
    __extends(GetMedicalVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMedicalVocabularyCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetMedicalVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "GetMedicalVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMedicalVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMedicalVocabularyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMedicalVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMedicalVocabularyCommand(input, context);
    };
    GetMedicalVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMedicalVocabularyCommand(output, context);
    };
    return GetMedicalVocabularyCommand;
}($Command));
export { GetMedicalVocabularyCommand };
//# sourceMappingURL=GetMedicalVocabularyCommand.js.map