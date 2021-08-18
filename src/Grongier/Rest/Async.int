ROUTINE Grongier.Rest.Async [Type=INC]
#; Job Statuses
/// Job is pending. Has not yet begun
#define JobPending	"pending"
/// Job is running.
#define JobRunning	"running"
/// Job completed with no errors.
#define JobComplete	"complete"
/// Job completed with errors during running the job.
#define JobError	"error"
/// Job completed with internal errors during storing the job or some other type of system error.
#define JobInternalError	"internal_error"

#; Generic helper macros
/// The current time in a specific format
#define CurrentTime	$ZDateTime($ZTimestamp, 3)
/// Log a status to the application error log if it is an error
#define LogToApplicationErrorLog(%sc) Set ex = ##class(%Exception.StatusException).CreateFromStatus(%sc) Do ex.Log()