package interview.projectInterview.ResponseDto;

import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;

import java.util.List;

public class NguoiDungTrongLopResponseDto<NguoiDungTrongLopViewDto> {
    private  long total;
    private List<NguoiDungTrongLopViewDto> results;

    public NguoiDungTrongLopResponseDto(List<NguoiDungTrongLopViewDto> results, long total) {
        this.results = results;
        this.total = total;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<NguoiDungTrongLopViewDto> getResults() {
        return results;
    }

    public void setResults(List<NguoiDungTrongLopViewDto> results) {
        this.results = results;
    }
}
