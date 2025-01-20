package interview.projectInterview.ResponseDto;

import interview.projectInterview.Models.NguoiDung;

import java.util.List;

public class NguoiDungResponseDto<NguoiDung> {
    private  long total;
    private List<NguoiDung> results;

    public NguoiDungResponseDto(long total, List<NguoiDung> results) {
        this.total = total;
        this.results = results;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<NguoiDung> getListnguoiDung() {
        return results;
    }

    public void setListnguoiDung(List<NguoiDung> results) {
        this.results = results;
    }
}
